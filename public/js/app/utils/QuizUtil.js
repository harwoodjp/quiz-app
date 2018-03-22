import React from "react"

import QuizList from "../components/QuizList"

function mapQuizArrToQuizCompArr(quizzes) {
  return quizzes.map(quiz => {
    return <Quiz
      key={quiz.id}
      title={quiz.title}
      link={quiz.link}
      questions={quiz.questions}
    /> 
  })
}

function mapQuizArrToQuizListCompArr(quizzes) {
  return quizzes.map(quiz => {
    return <QuizList
      key={quiz.id}
      title={quiz.title}
      link={quiz.link} 
    /> 
  })
}

function findQuizByLink(quizzes, link) {
  let foundQuiz
  quizzes.forEach(quiz => {
    if (quiz.link === link) {
      foundQuiz = quiz
    }
  })
  return foundQuiz
}

module.exports = {
  mapQuizArrToQuizCompArr,
  mapQuizArrToQuizListCompArr,
  findQuizByLink
}