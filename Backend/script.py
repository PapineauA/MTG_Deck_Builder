import psycopg2
from mtgsdk import Card

# Set up the database connection parameters
conn = psycopg2.connect(
    host="localhost",
    database="deck_builder",
    user="postgres",
    password="7Pxrf73nwrjfj4wk",
    port="5432"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Fetch all the cards
cards = Card.where(gameFormat='Commander').all()

# Loop through each card and insert it into the database
for card in cards:
    cur.execute("""
        INSERT INTO cards(id, name, manaCost, cmc, colors, colorIdentity, 
                          type, supertypes, set, text, power, toughness, loyalty)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
    """, (card.id, card.name, card.mana_cost, card.cmc, card.colors, card.color_identity,
          card.type, card.supertypes, card.set_name, card.text, card.power, card.toughness, card.loyalty))

# Commit the changes to the database
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
