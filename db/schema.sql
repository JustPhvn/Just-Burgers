CREATE DATABASE justburgers;
USE justburgers;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);

