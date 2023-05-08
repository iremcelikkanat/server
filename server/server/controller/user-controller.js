import User from "../schema/user-schema.js";
import Course from "../schema/course-schema.js";
import express from "express";
const router = express.Router();

export const addUser = async (request, response) => {
  const user = request.body;
  const email = request.body.email;
  const newUser = new User(user);
  //console.log(user)
  try {
    const existingUser = await User.findOne({ email }); // kullanici daha once kayit oldumu
    if (existingUser) {
      response.status(409).json("HATA: Email zaten mevcut");
      return;
    } else {
      await newUser.save();
      response.status(200).json(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatelesson = router.put("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    const course = await Course.findById(request.body.courseId);
    user.courses.push(course);
    await user.save();
    response.send(user);
  } catch (err) {
    console.log(err);
  }
});

export const loginUser = async (request, response) => {
  //MARK: Sifre haslenmeli
  const loginUserInfoPassword = request.body.password;
  const email = request.body.email;
  const existingUser = await User.findOne({ email }); // kullanici daha once kayit oldumu
  if (existingUser) {
    if (existingUser.password === loginUserInfoPassword) {
      console.log(existingUser._id);
      response.status(200).json(existingUser._id);
    } else {
      response.status(400).json(" Hatalı şifre girildi");
    }
  } else {
    response.status(400).json(`${email} adında bir kullanıcı bulunamadı`);
  }
};
