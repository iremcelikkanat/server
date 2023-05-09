import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  teachername: String,
  email: String,
  password: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
