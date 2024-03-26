import psycopg2
import config 

try:

    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME,
        password = config.PASSWORD,
        host = config.HOSTNAME,
        port = config.PORT
    )

cursor = conn.cursor()

# query = '''INSERT INTO actors (first_name, last_name, age, number_oscars)
#         VALUES ('Hugh', 'Laurie', '11/06/1959', 3)'''

# cursor.execute(query)
# conn.commit()
# cursor.execute('SELECT * FROM actors')

# Two method to fetch the date
# fetchall() para tomar los datos or fetchone() para agregar o cambiar los datos

# except psycopg2.Error as e:
# print(cursor.fetchall())

# finally:
#     if conn:
#     cursor.close()
#     conn.close()