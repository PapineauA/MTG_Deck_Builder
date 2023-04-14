import psycopg2
from mtgsdk import Card, Set

# Database connection parameters
conn_params = {
    "host": "localhost",
    "port": 1111,
    "dbname": "deck_builder",
    "user": "your_username",
    "password": "your_password",
}

# Connecting to database
conn = psycopg2.connect(**conn_params)
# Creates a cursor object
cur = conn.cursor()
# Querying database for information
cur.execute("SELECT card_name FROM cards;")
# Fetching the results of the query
results = cur.fetchall()

# Loops over the results and uses the MTGSDK to fetch the card information
for result in results:
    card_name = result[0]
    card_info = Card.where(name=card_name).all()

    # Inserts the card information into the table
    for card in card_info:
        cur.execute(
            "INSERT INTO card (id, name, manaCost, cmc, colors, colorIdentity, type, supertypes, set, text, power, toughness, loyalty) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);",
            (card.id, card.name, card.manaCost, card.cmc, card.colors, card.colorIdentity, card.type,
             card.supertypes, card.set, card.text, card.power, card.toughness, card.loyalty)
        )

# Commit the changes and close the cursor and connection
conn.commit()
cur.close()
conn.close()
