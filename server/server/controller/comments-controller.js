import Comment from "../schema/comment-schema.js";

import Course from "../schema/course-schema.js";



export const createComment = async (req, res) => {
    const commentInfo = req.body;
   
    try {
        const { _id, ...commentDataRest } = commentInfo; // _id'yi ayrı bir değişkene atayarak çıkar
        const newComment = new Comment(commentDataRest); // Geri kalan verileri newComment nesnesine aktar
        
        await newComment.save();

        const courseId = commentInfo._id;
        const course = await Course.findById(courseId);

        if (!course) {
        return res.status(404).json({ error: "Kurs bulunamadı" });
        }
        const commentData = {
        commenterName: newComment.commenterName,
        comment: newComment.comment,
    };

    course.comments.push(commentData);
    await course.save();
  
      res.status(200).json(newComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error)

    }
  };
  
export const getComment  = async (req, res) => {
    const commentInfo = req.body;
    const id = commentInfo.storeLessonId 
    console.log(id)
    try {
        const course = await Course.findById(id); // _id değerine sahip Course belgesini bul
        if (!course) {
          return res.status(404).json({ error: "Kurs bulunamadı" });
        }
        res.status(200).json(course)
      } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
      }
}