CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL
);


CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    kind INTEGER,
    description VARCHAR(255)
);