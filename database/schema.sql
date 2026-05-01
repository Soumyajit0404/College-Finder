-- database/schema.sql

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE colleges (
  id SERIAL PRIMARY KEY,
  name TEXT,
  location TEXT,
  fees INTEGER,
  rating FLOAT,
  placement_percentage INTEGER
);

CREATE TABLE saved_colleges (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  college_id INTEGER REFERENCES colleges(id)
);