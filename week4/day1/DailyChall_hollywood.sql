-- CREATE TABLE actors(
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	age DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (fisrt_name, last_name, age, number_oscars)
-- VALUES
-- ('George', 'Clooney', '05/06/1961', 2),
-- ('Gal', 'Gadot', '30/04/1985', 2),
-- ('Bradd', 'Pitt', '18/12/1963', 2),
-- ('Angelina', 'Jolie', '04/06/1975', 2),
-- ('Jennifer', 'Lawrence', '15/08/1990', 1),
-- ('Adam', 'Sandler', '09/09/1966', 0);


-- SELECT * FROM actors

-- SELECT fisrt_name, number_oscars FROM actors

-- SELECT * FROM actors WHERE fisrt_name = 'Gal'

-- SELECT fisrt_name, last_name FROM actors WHERE number_oscars >= 2
-- AND age = '18/12/1963'

-- SELECT * FROM actors WHERE last_name LIKE '%wre%'
-- SELECT * FROM actors WHERE last_name LIKE '%y'
-- SELECT * FROM actors WHERE last_name ILIKE 'ga%'
-- LIKE es sencible a las mayusculas
-- ILIKE no es sensible a las mayusculas

-- SELECT * FROM actors LIMIT 1;
-- SELECT * FROM actors WHERE age > '1960/01/01' LIMIT 3 OFFSET 2;

-- UPDATE actors
-- SET fisrt_name = 'Angelina'
-- last_name = 'Jolie'
-- WHERE fisrt_name = 'Brad'

-- DELETE FROM actors
-- WHERE first_name = 'Angelina';

-- ALTER TABLE actors RENAME COLUMN fisrt_name to first_name

-- SELECT * FROM actors LIMIT 4;
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- SELECT * FROM actors WHERE first_name LIKE '%e%'
-- SELECT * FROM actors WHERE number_oscars >= 5

-- SELECT COUNT(*) FROM actors

-- INSERT INTO actors (first_name, age)
-- VALUES
-- ('Pierce', '16/05/1953');

-- Failing row contains (12, Pierce, Brosnan, 1953-05-16, null).null value in column "number_oscars" of relation "actors" violates not-null constraint 

-- SELECT * FROM actors








