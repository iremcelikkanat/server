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

export const updateRating = async (request, response) => {
  try {
    const courseInfoID = request.body;
    const courseInfo = request.body;
    console.log(courseInfoID.ratingData._id);
    console.log(courseInfoID);
    const updatedData = await Course.findOneAndUpdate(
      { _id: courseInfoID.ratingData._id }, // Güncellenecek dersin kimliğini belirtin
      { $set: { rating: courseInfo.objectRating.rating } }, // Güncellenen değeri belirtin
      { new: true } // Güncellenmiş veriyi döndürmek için new: true kullanın
    );

    response.status(200).json(updatedData);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Rating güncellenirken bir hata oluştu" });
  }
};
