CREATE TABLE answers (
  id int NOT NULL,
  question_id int NOT NULL,
  answer varchar(45) NOT NULL,
  correct tinyint NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);