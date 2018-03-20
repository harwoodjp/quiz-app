import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`

class MyQuizzes extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

	render() {
		return (
      <Wrapper>
        <p>My Quizzes</p>
      </Wrapper>
		)
	}
}

export default MyQuizzes