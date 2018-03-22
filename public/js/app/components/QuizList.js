import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
  align-self: center;
  margin-bottom: .25em;  
`

class QuizList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

	render() {
		return (
      <Wrapper>
        <Link to={`/quizzes/${this.props.link}`}>
          {this.props.title}
        </Link>
      </Wrapper>
		)
	}
}

export default QuizList