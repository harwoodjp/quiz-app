const QuizDataService = require("../services/data/QuizDataService")

exports.userSession = (req, res) => {
  const user = req.user ? req.user : null  
  if (user) {
    const sessionData = Object.assign({}, user)
    delete sessionData.password
    res.send(JSON.stringify(sessionData))
  } else {
    res.redirect("/")
  }
}

exports.quizzesBySessionUserId = (req, res) => {
  const user = req.user ? req.user : null  
  if (user) {
    QuizDataService.fetchQuizzesByUserId(user.id)
      .then(quizzes => res.end(JSON.stringify(quizzes)))
  } else {
    console.log("user is null, fetch failed")    
    res.redirect("/")    
  }
}

exports.quizByUserIdQuizLink = (req, res) => {
  const user = req.user ? req.user : null  
  if (user) {
    QuizDataService.fetchQuizByUserIdQuizLink(user.id, req.params.link)
      .then(quiz => res.end(JSON.stringify(quiz)))
  } else {
    console.log("user is null, fetch failed")
    res.redirect("/")    
  }
}