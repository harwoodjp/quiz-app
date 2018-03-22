import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import MyQuizzes from "./components/MyQuizzes"
import Quiz from "./components/Quiz/Quiz"
import CreateQuiz from "./components/CreateQuiz"

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/quizzes" component={MyQuizzes} />
          <Route path="/quizzes/:link" component={Quiz} />
          <Route exact path="/create" component={CreateQuiz} />
          <Route path="*" render={() => (<Redirect to="/" />)} />
        </Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Router />, document.querySelector("#app"))
