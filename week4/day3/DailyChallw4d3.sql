-- DAILY CHALLENGE
-- 1.
-- CREATE TABLE Customer (
--  id SERIAL PRIMARY KEY,
--  first_name VARCHAR(255) NOT NULL,
--  last_name VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE CustomerProfile (
--  id SERIAL PRIMARY KEY,
--  isLoggedIn BOOLEAN DEFAULT false,
--  customer_id INT,
--  FOREIGN KEY (customer_id) REFERENCES Customer(id)
-- );

-- 2.


-- INSERT INTO Customer (first_name, last_name) VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- 3.

-- INSERT INTO CustomerProfile (isLoggedIn, customer_id) VALUES
-- (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
-- (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));


-- 4.

-- SELECT c.first_name
-- FROM Customer c
-- JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- SELECT c.first_name, cp.isLoggedIn
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- SELECT COUNT(*)
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;

-- PART II

-- 1.

-- CREATE TABLE Book (
--  book_id SERIAL PRIMARY KEY,
--  title VARCHAR(255) NOT NULL,
--  author VARCHAR(255) NOT NULL
-- );

-- 2.

-- INSERT INTO Book (title, author) VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- 3.

-- CREATE TABLE Student (
--  student_id SERIAL PRIMARY KEY,
--  name VARCHAR(255) NOT NULL UNIQUE,
--  age INT CHECK (age <= 15)
-- );

-- 4.

-- INSERT INTO Student (name, age) VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- 5.

-- CREATE TABLE Library (
--  book_fk_id INT,
--  student_id INT,
--  borrowed_date DATE,
--  PRIMARY KEY (book_fk_id, student_id),
--  FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--  FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- 6.

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date) VALUES
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
-- ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

-- 7.

-- SELECT * FROM Library;

-- SELECT s.name, b.title
-- FROM Library l
-- JOIN Student s ON l.student_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;

-- SELECT AVG(age)
-- FROM Student s
-- JOIN Library l ON s.student_id = l.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- DELETE FROM Student WHERE name = 'John';
-- After deleting a student from the Student table, due to the ON DELETE CASCADE constraint in the Library table, 
-- all records in the Library table that reference the deleted student will also be automatically deleted. 
-- This ensures referential integrity and prevents orphaned records in the Library table.











