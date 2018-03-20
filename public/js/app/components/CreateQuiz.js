import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`

class CreateQuiz extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

	render() {
		return (
      <Wrapper>
        <p>Create Quiz</p>
      </Wrapper>
		)
	}
}

export default CreateQuiz