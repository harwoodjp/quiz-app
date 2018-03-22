import React, { Component } from "react"
import styled from "styled-components"

import QuizUtil from "../../utils/QuizUtil"
import QuestionUtil from "../../utils/QuestionUtil"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  align-self: center;
  margin-top: 0;
`

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      questions: [],
      isLoading: false
    }
  }

  componentDidMount() {
    const link = this.props.match.params.link
    const f = fetch("/public/data/quizzes.json").then(res => res.text())
    f.then(res => {
      const quizzes = JSON.parse(res)
      const thisQuiz = QuizUtil.findQuizByLink(quizzes, link)
      this.setState({
        title: thisQuiz.title,
        questions: QuestionUtil.mapQuestionsArrToCompArr(thisQuiz.questions)
      })
    })

  }

	render() {
		return (
      <Wrapper>
        <Title>{this.state.title}</Title>
        {this.state.questions}
      </Wrapper>
		)
	}
}

export default Quiz