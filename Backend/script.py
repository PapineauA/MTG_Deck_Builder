import psycopg2
from psycopg2 import sql
import os
from dotenv import load_dotenv
from mtgsdk import Card

# Initiating environment variables & connecting to database
load_dotenv()
conn = psycopg2.connect(
    host=os.getenv("host"),
    database=os.getenv("database"),
    user=os.getenv("user"),
    password=os.getenv("password"),
    port=os.getenv("port"),
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
                    type TEXT,
                    supertypes TEXT[],
                    set_name TEXT,
                    text TEXT,
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

    insert_query = sql.SQL("""INSERT INTO cards (name, mana_cost, cmc, colors, color_identity, type, supertypes, set_name, text, power, toughness, loyalty, image_url)
                    VALUES ({name}, {mana_cost}, {cmc}, {colors}, {color_identity}, {type}, {supertypes}, {set_name}, {text}, {power}, {toughness}, {loyalty}, {image_url})""").format(
        name=sql.Literal(card.name),
        mana_cost=sql.Literal(card.mana_cost),
        cmc=sql.Literal(card.cmc),
        colors=sql.Literal(card.colors),
        color_identity=sql.Literal(card.color_identity),
        type=sql.Literal(card.type),
        supertypes=sql.Literal(card.supertypes),
        set_name=sql.Literal(card.set_name),
        text=sql.Literal(card.text),
        power=sql.Literal(card.power),
        toughness=sql.Literal(card.toughness),
        loyalty=sql.Literal(card.loyalty),
        image_url=sql.Literal(card.image_url))

    cur.execute(insert_query)
    conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
