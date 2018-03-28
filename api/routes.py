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
    return jsonify([{'id': 1,
                     'username': 'Admin',
                     'email': 'Admin12345@gmail.com',
                     'password': '12345',
                     'phone': '911',
                     'bday': '01/01/2000',
                     'q1': 'N/A',
                     'a1': 'N/A',
                     'q2': 'N/A',
                     'a2': 'N/A',
                     'q3': 'N/A',
                     'a3': 'N/A',}]), 200
