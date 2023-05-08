import express from "express";
import { addUser } from "../controller/user-controller.js";
import { loginUser } from "../controller/user-controller.js";
import { addCourse } from "../controller/course-controller.js";
import { addBuyLesson } from "../controller/buyLesson-controller.js";
import { getData } from "../controller/course-controller.js";
const router = express.Router();

router.post("/getLessonData", getData);
router.post("/buylesson", addBuyLesson);
router.post("/add", addUser);
router.post("/login", loginUser);
router.post("/addCourse", addCourse);
export default router;
