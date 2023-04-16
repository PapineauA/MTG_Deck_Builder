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
def fetch_data(searchtext):
    cur = conn.cursor()
    querytext = f"SELECT name FROM cards WHERE name ILIKE '%{searchtext}%';"
    cur.execute(querytext)
    print(cur.fetchall())
    return cur.fetchall()


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
