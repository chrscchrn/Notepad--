DROP DATABASE IF EXISTS projecttwo;
CREATE DATABASE projecttwo;
USE projecttwo;

CREATE TABLE project (
  id int NOT NULL AUTO_INCREMENT,
  database_two varchar(255) NOT NULL,
  PRIMARY KEY (id)
);