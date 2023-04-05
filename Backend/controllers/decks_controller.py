from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/test')
def get_test():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)
