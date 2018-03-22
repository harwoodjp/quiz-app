import React from "react"

import Question from "../components/Quiz/Question"

function mapQuestionsArrToCompArr(questions) {
  return questions.map(question => {
    return <Question
      key={question.prompt}
      prompt={question.prompt}
    /> 
  })
}

module.exports = {
  mapQuestionsArrToCompArr
}