import express from "express";
import { addUser } from "../controller/user-controller.js";
import { loginUser } from "../controller/user-controller.js";
import { addCourse } from "../controller/course-controller.js";
import { getData } from "../controller/course-controller.js";
import { addTeacher } from "../controller/teacher-controller.js";
import { loginTeacher } from "../controller/teacher-controller.js";
import { buyLesson } from "../controller/buyLesson-controller.js";
import { purchasedCourse } from "../controller/buyLesson-controller.js";
import { updateRating } from "../controller/course-controller.js";
import { createComment } from "../controller/comments-controller.js";
import { getComment } from "../controller/comments-controller.js";

const router = express.Router();

router.post("/loginteacher", loginTeacher);
router.post("/buylesson", buyLesson);
router.post("/addteacher", addTeacher);
router.post("/getLessonData", getData);
router.post("/updateRating", updateRating);
router.post("/add", addUser);
router.post("/login", loginUser);
router.post("/addCourse", addCourse);
router.post("/purchasedCourse", purchasedCourse);
router.post("/comments", createComment);
router.post("/getComment", getComment);



export default router;
