CREATE TABLE quizzes (
  id int NOT NULL,
  user_id int NOT NULL,
  title varchar(45) NOT NULL,
  link varchar(45) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);