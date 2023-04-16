from flask import Flask, jsonify
import os
from dotenv import load_dotenv
import psycopg2

# Initiating environment variables
load_dotenv()
conn = psycopg2.connect(
    host=os.getenv("host"),
    database=os.getenv("database"),
    user=os.getenv("user"),
    password=os.getenv("password"),
    port=os.getenv("port"),
)


app = Flask(__name__)


# Fetching data from db
def fetch_data(fetchtext):
    cur = conn.cursor()
    querytext = f"WITH ranked_cards AS (SELECT name, image_url, ROW_NUMBER() OVER (PARTITION BY name ORDER BY id) AS row_num FROM cards WHERE id IN (SELECT id FROM cards GROUP BY id HAVING COUNT(*) > 0) AND name ILIKE '%{fetchtext}%') SELECT name, image_url FROM ranked_cards WHERE row_num = 1 ORDER BY name;"
    cur.execute(querytext)
    return cur.fetchmany(20)


@app.route('/')
def home():
    return 'This is the homepage.'


@app.route('/cardsearch/<searchtext>')
def card_search(searchtext):
    return jsonify(fetch_data(searchtext))


@app.route('/decks')
def decks():
    return 'This is the decks page.'


if __name__ == '__main__':
    app.run(debug=True)
