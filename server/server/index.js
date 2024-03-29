import Connection from "./database/db.js";
import Routes from "./routes/route.js";

// const express = require("express");
// const cors = require("cors"); //Cross-Origin Resource Sharing

// const bodyParser = require("body-parser");

// //include required modules
// const jwt = require("jsonwebtoken");
// const config = require("./config");
// const rp = require("request-promise");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import config from "./config.js";
import rp from "request-promise";
import http from "http";
import { Server } from "socket.io";
const app = express();
const port = 3444;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Zoom API" });
});
//zoom

var email, userid, resp;

//Use the ApiKey and APISecret from config.js
const payload = {
  iss: config.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, config.APISecret);
app.post("/meeting", (req, res) => {
  email = req.body.email;
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "Meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response.join_url);
      // response.status(200).json(response);
      let dataRes = {
        join_url: response.join_url,
      };
      res.status(200).json(dataRes);

      // res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", Routes);
Connection();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

io.on("connection", (socket) => {
  console.log("Yeni bir kullanıcı bağlandı.");

  // Linki tüm taraflara yayınla
  socket.on("linkGonder", (link) => {
    console.log("bu", link);
    io.emit("linkGoster", link);
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı bağlantısı kesildi.");
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
