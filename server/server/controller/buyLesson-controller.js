import BuyLesson from "../schema/buyLesson-schema.js";

export const buyLesson = async (request, response) => {
  const lesson = request.body;
  console.log(lesson);
  //   const email = request.body.email;
  const newBuyLesson = new BuyLesson(lesson);
  //console.log(user)
  try {
    await newBuyLesson.save();
    response.status(200).json("Kurs başarıyla ile eklendi");
  } catch (error) {
    console.log(error);
  }
};
