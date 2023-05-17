import mongoose from "mongoose";
/*
id 1:Mat
id 2:türk
id 3:fen

*/
// Ders şema tanımı
const courseSchema = new mongoose.Schema(
  {
    courseId: Number,
    lessonName: String,
    amount: Number,
    explanation: String,
    category: String,
    postImage: String,
    hours: Number,
    courseTitle: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Modellerin oluşturulması
const Course = mongoose.model("Course", courseSchema);

export default Course;

// import mongoose from "mongoose";
// /*
// id 1:Mat
// id 2:türk
// id 3:fen

// */
// // Ders şema tanımı
// const courseSchema = new mongoose.Schema({
//   courseId: Number,
//   lessonName: String,
//   amount: Number,
//   explanation: String,
//   category: String,

//   // students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
// });

// // Modellerin oluşturulması
// const Course = mongoose.model("Course", courseSchema);

// export default Course;
