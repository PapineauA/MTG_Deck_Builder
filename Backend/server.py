from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)


@app.route('/cards')
def get_cards():
    conn = psycopg2.connect(dbname='cards')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM cards')
    cards = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(cards)
