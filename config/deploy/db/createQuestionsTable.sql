CREATE TABLE questions (
  id int NOT NULL,
  quiz_id int NOT NULL,
  prompt varchar(45) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);
