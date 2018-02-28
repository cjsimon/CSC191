from flask import url_for, request, jsonify
from api import app
import requests
import json

@app.route('/api/v1/')
def process_request():
    response = [{
        'key': 'value'
    }]
    return jsonify(response=response), 200

@app.route('/api/v1/demo/')
def sql_demo():
    # TODO: Add sql query demo
    return jsonify([{'test': 'data'}]), 200
