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
    const f = fetch(`/api/quizzes/${link}`,{
      credentials: "include"      
    }).then(res => res.text())
    f.then(res => {
      const questions = JSON.parse(res).map(question => {
        return {
          question_id: question.question_id,
          prompt: question.prompt,
          answer: question.answer
        }
      })
      console.log(questions)
      this.setState({
        title: JSON.parse(res)[0].title,
        questions: []
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