import React, { Component } from "react"
import styled from "styled-components"

import QuizList from "./QuizList"

import QuizUtil from "../utils/QuizUtil"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  align-self: center;
  margin-top: 0;
`


class MyQuizzes extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const f = fetch("/public/data/quizzes.json").then(res => res.text())
    f.then(res => {
      const quizzes = JSON.parse(res)
      this.setState({
        quizList: QuizUtil.mapQuizArrToQuizListCompArr(quizzes)
      })
    })
  }

	render() {
		return (
      <Wrapper>
        <Title>{this.state.quizList}</Title>
      </Wrapper>
		)
	}
}

export default MyQuizzes