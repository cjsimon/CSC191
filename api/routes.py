from flask import url_for, request, jsonify
from api import app
import http.client
import requests
import json


#connection = http.client.HTTPSConnection('sandbox.tradier.com', 443, timeout = 30)

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

@app.route('/api/v1/showstock/')
def show_stock():
    connection = http.client.HTTPSConnection('sandbox.tradier.com')
    headers = {"Accept":"application/json",
           "Authorization":"Bearer Hu2fgA4jAHr9L4NucOpJWx1JhzNX"}
    connection.request('GET', '/v1/markets/quotes?symbols=INTC', None, headers)
    # Headers


    return jsonify([{"stuff": "MoreStuff"}]),200
