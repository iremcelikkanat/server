import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;

/*
// Öğrenci şema tanımı
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  department: String,
});

// Ders şema tanımı
const courseSchema = new mongoose.Schema({
  name: String,
  teacher: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

// Modellerin oluşturulması
const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);

// Ders belgesi oluşturma ve kaydetme
const course = new Course({
  name: 'Mathematics',
  teacher: 'John Doe',
  students: []
});
await course.save();

// Öğrenci belgelerinin oluşturulması ve kaydedilmesi
const student1 = new Student({
  name: 'Alice',
  age: 22,
  department: 'Mathematics',
});
await student1.save();

const student2 = new Student({
  name: 'Bob',
  age: 23,
  department: 'Physics',
});
await student2.save();

// Ders belgesine öğrencilerin ObjectId'lerinin eklenmesi
course.students.push(student1._id);
course.students.push(student2._id);
await course.save();

// Ders belgesinin yeniden yüklenmesi ve öğrenci bilgilerinin alınması
const updatedCourse = await */
