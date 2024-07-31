import psycopg2

# Connexion à la base de données PostgreSQL
conn = psycopg2.connect(
    dbname="Resto",
    user="postgres",
    password="Myhero1234",
    host="localhost",
    port="5432"
)

# Ouverture du fichier contenant le schéma SQL
with open('schema.sql') as f:
    # Création d'un curseur pour exécuter le script SQL
    with conn.cursor() as cursor:
        # Exécution du script SQL contenu dans le fichier
        cursor.execute(f.read())

# Validation des modifications et fermeture de la connexion
conn.commit()
conn.close()
