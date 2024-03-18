-- SELECT * FROM actors

-- SELECT number_oscars AS oscars
-- FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('George', 'Clooney', '06/05/1961', 1);

-- SELECT count(number_oscars)
-- AS total_oscars
-- FROM actors
-- WHERE first_name = 'George'

-- SELECT count(*) FROM actors

-- SELECT sum (number_oscars)
-- AS total_oscars
-- FROM actors
-- WHERE first_name = 'George'

-- SELECT max(number_oscars)
-- AS best_actor
-- FROM actors

-- SELECT first_name, last_name, sum(number_oscars)
-- AS best_actors
-- FROM actors
-- GROUP BY first_name, last_name

-- Exercise
-- SELECT avg(number_oscars) 
-- AS average_oscars_per_actor
-- FROM actors

-- SELECT DISTINCT first_name
-- FROM actors
-- WHERE number_oscars > ;

-- SELECT * FROM actors WHERE age > '01/01/1970'

-- SELECT first_name
-- FROM actors
-- WHERE first_name IN ('David', 'Morgan', 'Will');

-- SELECT * FROM actors



