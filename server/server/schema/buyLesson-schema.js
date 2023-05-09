import mongoose from "mongoose";

const buyLessonScheme = new mongoose.Schema({
  lessonName: String,
  amount: String,
  explanation: String,
  category: String,
  userId: String,
});

const BuyLesson = mongoose.model("BuyLesson", buyLessonScheme);

export default BuyLesson;
