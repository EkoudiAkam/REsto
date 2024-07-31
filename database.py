import psycopg2
from flask import g

def get_db_connection():
    if 'db_connection' not in g:
        g.db_connection = psycopg2.connect(
            dbname="Resto",
            user="postgres",
            password="Myhero1234",
            host="localhost",
            port="5432"
        )
        g.db_connection.autocommit = True
    return g.db_connection
