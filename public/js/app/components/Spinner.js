import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`

class Spinner extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

	render() {
		return (
      <Wrapper>
        <p>Dashboard</p>
      </Wrapper>
		)
	}
}

export default Spinner