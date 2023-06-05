import mongoose from "mongoose";

const buyLessonScheme = new mongoose.Schema({
  cardName: String,
  cardNumber: String,
  date: String,
  cvc: String,
  userId: String,
  lessonName: String,
  lessonId: String,
  rating: Number,
  amount: Number,
  category: String,
  teacherName: String,
  courseTitle: String,
  description: String,
  explanation: String,
});

const BuyLesson = mongoose.model("BuyLesson", buyLessonScheme);

export default BuyLesson;
