-- Exercise 1

-- 1.
-- SELECT * FROM language;

-- 2.
-- SELECT f.title, f.description, l.name
-- FROM film f
-- INNER JOIN language l ON f.language_id = l.language_id;

-- 3.
-- SELECT l.name AS language_name, f.title, f.description
-- FROM language l
-- LEFT JOIN film f ON l.language_id = f.language_id;

-- 4.
-- CREATE TABLE new_film (
--  id INT PRIMARY KEY,
--  name VARCHAR(255) NOT NULL
-- );

-- INSERT INTO new_film (id, name) VALUES
-- (1, 'The Matrix'),
-- (2, 'Tomb Raider'),
-- (3, 'Transpoting');

-- 5.
-- CREATE TABLE customer_review (
--   review_id SERIAL PRIMARY KEY,
--   film_id INT NOT NULL,
--   language_id INT NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   score INT CHECK (score BETWEEN 1 AND 10),
--   review_text TEXT,
--   last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--   FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- 6.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (1, 1, 'The Matrix bends reality with mind-blowing action and a philosophical punch.', 10, 'Hilarious and quotable!'),
--        (2, 2, 'A gritty origin story reboots the iconic Tomb Raider franchise.', 6, 'Good action but lacking in character depth.'),
-- 	   (3, 3, 'darkly comedic plunge into Edinburgh drug scene, exploring addiction, friendship, and the struggle for a clean slate.', 9, 'A dark and thought-provoking film.');

-- SELECT * FROM customer_review

-- DELETE FROM new_film WHERE id = 2;

-- Exercise 2

-- 1.
-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'German')
-- WHERE title IN ('Transpoting');

-- 2.
-- Assuming the customers table has foreign keys referencing other tables (e.g., address_id referencing the addresses table), 
-- these foreign keys ensure referential integrity. When inserting into the customers table, you must ensure that the 
-- values for these foreign keys exist in the referenced tables. For example, if address_id is a foreign key, the address
-- must already exist in the addresses table before you can insert a new customer with that address.

-- 3.
-- DROP TABLE customer_review;

-- 4.
-- SELECT COUNT(*) FROM rental
-- WHERE return_date IS NULL;

-- 5.
-- SELECT f.title, f.rental_rate
-- FROM film f
-- JOIN rental r ON f.film_id = r.inventory_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

-- 6.
-- SELECT f.title
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
-- AND f.description LIKE '%sumo wrestler%';

-- SELECT f.title
-- FROM film f
-- WHERE f.length < 60 AND f.rating = 'R';

-- SELECT f.title
-- FROM film f
-- JOIN rental r ON f.film_id = r.inventory_id
-- JOIN payment p ON r.rental_id = p.rental_id
-- WHERE p.amount > 4.00 AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- SELECT f.title
-- FROM film f
-- WHERE f.title LIKE '%boat%' OR f.description LIKE '%boat%'
-- AND f.replacement_cost > (SELECT AVG(replacement_cost) FROM film);











