const db = require("../../../config/db")

exports.fetchQuizzesByUserId = async userId => {
  return await 
    db("quizzes")
      .where("user_id", "=", userId)
} 

exports.fetchQuizByUserIdQuizLink = async (userId, link) => {
  return await 
    db("quizzes")
      .innerJoin("questions", "quizzes.id", "questions.quiz_id")
      .innerJoin("answers", "questions.id", "answers.question_id")
      .where("quizzes.link", "=", link)
}
