import Course from "../schema/course-schema.js";

export const addCourse = async (request, response) => {
  const courseInfo = request.body;
  console.log(courseInfo);
  response.status(200).json("Kurs başarıyla ile eklendi");
  //   const email = request.body.email;
  const newCourse = new Course(courseInfo);
  //console.log(user)
  try {
    await newCourse.save();
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (request, response) => {
  try {
    console.log("hello");
    const getDatas = await Course.find(); // Verileri getirmek için Course sınıfının find() metodunu kullanın
    console.log(getDatas);
    response.status(200).json(getDatas); // Verileri yanıt olarak gönderin
  } catch (error) {
    console.log(error);
  }
};
