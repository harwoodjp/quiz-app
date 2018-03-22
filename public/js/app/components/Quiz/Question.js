import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #013a33;
  margin-bottom: 1em;
  padding: 1em;
`

class Question extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

	render() {
		return (
      <Wrapper>
        {this.props.prompt}
      </Wrapper>
		)
	}
}

export default Question