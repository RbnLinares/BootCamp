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
    # cursor = conn.cursor()
    # cursor.execute('SELECT * FROM language')
    # all_rows = cursor.fetchall() #getting data from db
    # for row in all_rows:
    #     print(row)

    # cursor = conn.cursor()
    # cursor.execute('''SELECT f.title, f.description, l.name
    #                 FROM film f
    #                 JOIN language l ON f.language_id = l.language_id;''')
    # all_rows = cursor.fetchall() 
    # for row in all_rows:
    #     print(row)   

    # cursor = conn.cursor()
    # cursor.execute('''SELECT f.title, f.description, l.name
    #                     FROM language l
    #                     LEFT JOIN film f ON f.language_id = l.language_id;''')
    # all_rows = cursor.fetchall() 
    # for row in all_rows:
    #     print(row) 

    def create_table(customer_review, str):
        query = create_table{customer_review}(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );

except psycopg2.Error as e: 
    print('Error connecting', e)

finally:
    if conn:
        cursor.close()
        conn.close()

    




