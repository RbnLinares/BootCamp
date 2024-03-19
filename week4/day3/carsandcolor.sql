-- CREATE TABLE colors(
-- color_id SERIAL PRIMARY KEY,
-- color_name VARCHAR(100));

-- INSERT INTO colors (color_name)
-- VALUES
-- ('yellow'),
-- ('red'),
-- ('blue');

-- SELECT * FROM colors

-- CREATE TABLE cars( 
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE SET NULL,
-- car_name VARCHAR (50)
-- );

-- INSERT INTO cars (car_color, car_name)
-- VALUES
-- ((SELECT color_id FROM colors WHERE color_name = 'blue'), 'Mazda'),
-- ((SELECT color_id FROM colors WHERE color_name = 'yellow'), 'BMW'),
-- ((SELECT color_id FROM colors WHERE color_name = 'red'), 'Buggati');

-- SELECT * FROM cars

-- DELETE FROM colors WHERE color_name = 'blue'

-- DELETE FROM colors WHERE color_name = 'yellow'

