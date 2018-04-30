import json
import requests
from flask import Blueprint, url_for, request, jsonify

import http.client
import random

class Routes:
    api = Blueprint('api', __name__)

    def __init__(self, database):
        global db # self cannot be passed in blueprint route definitions
        db = database

    @api.route('/api/v1/UserAccountApplicationVerification', methods = ['POST'])
    def process_user_account_request():
        data = request.get_json()
        email = data['email']
        #SQL QUERY HERE
        #SELECT email FROM users WHERE users.email = [email]
        #save the amount of results into rows

        resp = ""
        if rows != 0:
            resp = "This Email Exists. Please Enter a Valid Email\n"
        response = [{
            'response': resp
        }]
        return jsonify(response=response), 200

    @api.route('/api/v1/AccountCreation', methods = ['POST'])
    def process_account_creation():
        data = request.get_json() #stores all relevant info
        #username
        #email
        #password
        #phone
        #bday
        #q1
        #a1
        #q2
        #a2
        #q3
        #a3

        #SQL QUERY HERE
        #INSERT INTO users info from data
        return jsonify(response=response), 204

    @api.route('/api/v1/Login')
    def process_login():
        data = request.get_json()
        email = data['email']
        password = data['password']

        #SQL QUERY HERE
        #SELECT email FROM users WHERE users.email=email AND users.password=password
        #save the amount of results into rows

        resp = False
        if rows != 0:
            resp = True
        response = [{
            'response': resp
        }]
        return jsonify(response=response), 200

    @api.route('/api/v1/Update')
    def process_update_request():
        data = request.get_json()
        oldemail = data['oldemail']
        email = data['email']
        password = data['password']
        username = data['username']

        resp = ""
        replace = False
        
        if oldemail == email:
            replace = True
        else:
            #SQL QUERY HERE
            #SELECT email FROM users WHERE users.email=email AND users.password=password
            #save the amount of results into rows
            if rows != 0:
                resp = "This Email Exists. Please Enter a Valid Email\n"
            else:
                replace = True
        if replace:
            #SQL QUERY HERE
            #replace email and password where the entery.email=email

        response = [{
            'response': resp
        }]
        return jsonify(response=response), 200

    @api.route('/api/v1/')
    def process_request():
        response = [{
            'key': 'value'
        }]
        return jsonify(response=response), 204

    @api.route('/api/v1/')
    def process_request():
        response = [{
            'key': 'value'
        }]
        return jsonify(response=response), 204

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
