from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def home():
    return 'This is the homepage.'


@app.route('/cardsearch')
def card_search():
    return 'This is the card search page.'


@app.route('/decks')
def decks():
    return 'This is the decks page.'


if __name__ == '__main__':
    app.run(debug=True)
