import mongoose from "mongoose";

// Ders şema tanımı
const buyLessonSchema = new mongoose.Schema({
  lessonName: String,
  amount: Number,
  explanation: String,
  category: String,
  userId: String,
  // students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Modellerin oluşturulması
const buyLesson = mongoose.model("buyLesson", buyLessonSchema);

export default buyLesson;
