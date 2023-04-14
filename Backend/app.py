from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS
from mtgsdk import Card, Set

app = Flask(__name__)
CORS(app)


# Iterating through cards to check legality, eliminating illegal cards.
def is_legal_in_commander(card):
    print("checking if legal...")
    return any(
        legality.get('format') == 'Commander' for legality in card.legalities)


# Storing card information. Doesn't actually add to the database, but more so fetching the information, and returning it to the user.
def store_card_data(card):
    print("storing card data...")

    card_data = {
        'name': card.name,
        'manaCost': card.mana_cost,
        'cmc': card.cmc,
        'colors': card.colors,
        'colorIdentity': card.color_identity,
        'type': card.type,
        'supertypes': card.supertypes,
        'types': card.types,
        'subtypes': card.subtypes,
        'set': card.set,
        'text': card.text,
        'power': card.power,
        'toughness': card.toughness,
        'loyalty': card.loyalty,
    }
    return card_data


# Fetches the actual unique cards.
def fetch_unique_commander_cards(limit):
    print("fetching unique cards...")

    unique_cards = {}
    card_data_dict = {}
    page = 1
    while len(unique_cards) < limit:
        cards = Card.where(page=page, pageSize=limit).all()
        for card in cards:
            if card.multiverse_id not in unique_cards and is_legal_in_commander(
                    card):
                unique_cards[card.multiverse_id] = card
                card_data_dict[card.name] = store_card_data(card)
                if len(unique_cards) == limit:
                    break
        page += 1

    for index, card_data in enumerate(card_data_dict.values()):
        print(f"{index + 1}. {card_data['name']} - {card_data['set']}")

    return card_data_dict


@app.route('/test')
def get_test():
    commanderCards = fetch_unique_commander_cards(500)
    data = {"message": "Hello from Flask!"}
    return jsonify(data)
