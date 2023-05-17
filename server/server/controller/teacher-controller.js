import Teacher from "../schema/teacher-schema.js";
import Course from "../schema/course-schema.js";
import express from "express";
const router = express.Router();

export const addTeacher = async (request, response) => {
  const teacher = request.body;
  const email = request.body.email;
  const newTeacher = new Teacher(teacher);
  //console.log(user)
  try {
    const existingUser = await Teacher.findOne({ email }); // kullanici daha once kayit oldumu
    if (existingUser) {
      response.status(409).json("HATA: Email zaten mevcut");
      return;
    } else {
      await newTeacher.save();
      response.status(200).json(newTeacher);
    }
  } catch (error) {
    console.log(error);
  }
};

// export const updatelesson = router.put("/:id", async (request, response) => {
//   try {
//     const user = await User.findById(request.params.id);
//     const course = await Course.findById(request.body.courseId);
//     user.courses.push(course);
//     await user.save();
//     response.send(user);
//   } catch (err) {
//     console.log(err);
//   }
// });

export const loginTeacher = async (request, response) => {
  //MARK: Sifre haslenmeli
  const loginTeacherInfoPassword = request.body.password;
  const email = request.body.email;
  const existingUser = await Teacher.findOne({ email }); // kullanici daha once kayit oldumu
  if (existingUser) {
    if (existingUser.password === loginTeacherInfoPassword) {
      console.log(existingUser._id);
      response.status(200).json(existingUser.username);
    } else {
      response.status(400).json(" Hatalı şifre girildi");
    }
  } else {
    response.status(400).json(`${email} adında bir kullanıcı bulunamadı`);
  }
};
