CREATE TABLE instructors (
  id INT PRIMARY KEY,
  avatar_url TEXT NOT NULL,
  name TEXT NOT NULL,
  birth TIMESTAMP NOT NULL,
  gender TEXT NOT NULL,
  services TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
  );