import psycopg2
from mtgsdk import Card

# Connect to the database
conn = psycopg2.connect(
    host="localhost",
    database="deck_builder",
    user="postgres",
    password="7Pxrf73nwrjfj4wk",
    port="5432"
)

# Create a cursor
cur = conn.cursor()

# Define the SQL query to create the table
create_table_query = '''CREATE TABLE IF NOT EXISTS cards
                    (id SERIAL PRIMARY KEY,
                    name TEXT NOT NULL,
                    mana_cost TEXT,
                    cmc INTEGER,
                    colors TEXT[],
                    color_identity TEXT[],
                    type_line TEXT,
                    supertypes TEXT[],
                    set_name TEXT,
                    oracle_text TEXT,
                    power TEXT,
                    toughness TEXT,
                    loyalty TEXT,
                    image_url TEXT);'''

# Execute the query to create the table
cur.execute(create_table_query)

# Commit the changes
conn.commit()

# Get all the commander cards from the MTG SDK
commander_cards = Card.where(game_format='commander').all()

# Loop through the commander cards and insert them into the database
for card in commander_cards:
    print(f"Inserting card {card.name} into database...")

    insert_query = f"""INSERT INTO cards (name, mana_cost, cmc, colors, color_identity, type_line, supertypes, set_name, oracle_text, power, toughness, loyalty, image_url)
                    VALUES ('{card.name}', '{card.mana_cost}', {card.cmc}, ARRAY{card.colors}, ARRAY{card.color_identity}, '{card.type_line}', ARRAY{card.supertypes}, '{card.set_name}', '{card.oracle_text}', '{card.power}', '{card.toughness}', '{card.loyalty}', '{card.image_url}');"""

    cur.execute(insert_query)
    conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
