-- SELECT * FROM inventory

-- SELECT first_name, last_name AS full_name FROM customer

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer ORDER BY first_name DESC

-- SELECT film_id, title, description, release_year, rental_rate FROM film 
-- ORDER BY rental_rate ASC

-- SELECT address, phone FROM address
-- INNER JOIN customer ON customer.address_id = address.address_id
-- WHERE district = 'Texas'

-- SELECT * FROM film WHERE film_id IN (15, 150)

-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title = 'Sea Virgin'

-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title LIKE 'Tr%'

-- SELECT * FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10

-- SELECT * FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- INNER JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id ASC

-- SELECT title FROM film
-- LEFT JOIN inventory ON film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL

-- SELECT city, country 
-- FROM address a
-- INNER JOIN city ci ON a.city_id = ci.city_id
-- INNER JOIN country co ON ci.country_id = co.country_id

-- SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- INNER JOIN payment p ON c.customer_id = p.customer_id
-- INNER JOIN staff s ON p.staff_id = s.staff_id
-- ORDER BY s.staff_id ASC


