import json
import requests
from flask import Blueprint, url_for, request, jsonify

import http.client

class Routes:
    api = Blueprint('api', __name__)

    def __init__(self, database):
        global db # self cannot be passed in blueprint route definitions
        db = database

    @api.route('/api/v1/')
    def process_request():
        response = [{
            'key': 'value'
        }]
        return jsonify(response=response), 200

    @api.route('/api/v1/user/')
    def sql_demo():
        #User.query.filter(User.name == 'admin').first()
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

    @api.route('/api/v1/stock/')
    def show_stock():
        connection = http.client.HTTPSConnection('sandbox.tradier.com')
        headers = {"Accept":"application/json",
               "Authorization":"Bearer Hu2fgA4jAHr9L4NucOpJWx1JhzNX"}
        connection.request('GET', '/v1/markets/quotes?symbols=INTC', None, headers)
        # Headers


        response = connection.getresponse()
        content = response.read()
        stuff = json.loads(content)
        return jsonify([{
        'name': str(stuff["quotes"]["quote"]["description"]),
        'change': str(stuff["quotes"]["quote"]["change"]),
        'changeP': str(stuff["quotes"]["quote"]["change_percentage"]),
        'code': str(stuff["quotes"]["quote"]["symbol"])
        }]), 200;
