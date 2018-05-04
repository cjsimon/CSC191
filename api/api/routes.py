import json
import smtplib
import http.client
import random
import requests
from flask import Blueprint, url_for, request, jsonify
from sqlalchemy import text

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

    @api.route('/api/v1/email1', methods=['GET', 'POST'])
    def email1():
        targete = request.get_json()
        pEmail = "jetstox@gmail.com"
        pPass = "jetstox12345JETST0X"
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(pEmail, pPass)
        server.sendmail(pEmail, targete["email"], "HERE IS YOUR PASSWORD BOI")
        return jsonify(""), 200

    @api.route('/api/v1/email2', methods=['GET', 'POST'])
    def email2():
        targete = request.get_json()
        pEmail = "jetstox@gmail.com"
        pPass = "jetstox12345JETST0X"
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(pEmail, pPass)
        server.sendmail(pEmail, targete["email"], "HEY YOUR FRIEND WANTED THIS!!!")
        return jsonify(""), 200


    # TODO
    @api.route('/api/v1/user/')
    def sql_demo():
        # Inputs:
        # {
        #   'username':
        #   'password':
        # }
        # Output
        # {
		# 	'username': 'Admin',
		# 	'email': 'Admin12345@gmail.com',
		# 	'password': '12345',
		# 	'phone': '911',
		# 	'bday': '01/01/2000',
		# 	'q1': 'N/A',
		# 	'a1': 'N/A',
		# 	'q2': 'N/A',
		# 	'a2': 'N/A',
		# 	'q3': 'N/A',
		# 	'a3': 'N/A',
		# 	'balance': 10000}]), 200
		# },
        return jsonify([
            {
                'id': 1,
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
                'a3': 'N/A',
                'balance': 10000
            }
        ]), 200

    @api.route('/api/v1/stock/',methods=['GET','POST'])
    def get_stocks():
        targ = request.get_json()
        connection = http.client.HTTPSConnection('sandbox.tradier.com')
        headers = {
            "Accept"        : "application/json",
            "Authorization" : "Bearer Hu2fgA4jAHr9L4NucOpJWx1JhzNX"
        }
        connection.request('GET', '/v1/markets/quotes?symbols=' + targ["code"], None, headers)

        response = connection.getresponse()
        content  = response.read()
        stuff    = json.loads(content)
        valid    = ""

        if str(stuff["quotes"])[:9] == "{\'quote\':":
            return jsonify({
                'valid':     "True",
                'code':      str(stuff["quotes"]["quote"]["symbol"]),
                'name':      str(stuff["quotes"]["quote"]["description"]),
                'current':   str(stuff["quotes"]["quote"]["last"]),
                'open':      str(stuff["quotes"]["quote"]["open"]),
                'closed':    str(stuff["quotes"]["quote"]["close"]),
                'preclosed': str(stuff["quotes"]["quote"]["prevclose"]),
                'high':      str(stuff["quotes"]["quote"]["high"]),
                'low':       str(stuff["quotes"]["quote"]["low"]),
                'change':    str(stuff["quotes"]["quote"]["change"]),
                'changeP':   str(stuff["quotes"]["quote"]["change_percentage"]),
            }), 200

        return jsonify({ 'valid': "False" }), 200


    # TODO: POST interpret
    # Input
    # {
    #     stock: "FB"
    # }
    @api.route('/api/v1/stocks/')
    def show_stocks():
        #,'FB','AAPL','HP','MSFT','INTL'
        cs = ['SQ']
        codes = ""
        i = 0
        while i < len(cs) - 1:
            codes += cs[i] + ","
            i += 1
        codes += cs[len(cs) - 1]

        connection = http.client.HTTPSConnection('sandbox.tradier.com')
        headers = {
            "Accept"        : "application/json",
            "Authorization" : "Bearer Hu2fgA4jAHr9L4NucOpJWx1JhzNX"
        }
        connection.request('GET', '/v1/markets/quotes?symbols=' + codes, None, headers)
        response = connection.getresponse()
        content  = response.read()
        stuff    = json.loads(content)

        tmp = []
        i = 0
        rand = random.randint(1,1000)
        if len(cs) > 1:
            while i < len(cs):
                    tmp.append({
                        'name':         str(stuff["quotes"]["quote"][i]["description"]),
                        'change':       str(stuff["quotes"]["quote"][i]["change"]),
                        'changeP':      str(stuff["quotes"]["quote"][i]["change_percentage"]),
                        'code':         str(stuff["quotes"]["quote"][i]["symbol"]),
                        'TodayPrice':   str(stuff["quotes"]["quote"][i]["open"]),
                        'shares':       rand
                    })
                    rand = random.randint(1,1000)
                    i += 1
        else:
            rand = 1
            tmp.append({
                'name':         str(stuff["quotes"]["quote"]["description"]),
                'change':       str(stuff["quotes"]["quote"]["change"]),
                'changeP':      str(stuff["quotes"]["quote"]["change_percentage"]),
                'code':         str(stuff["quotes"]["quote"]["symbol"]),
                'TodayPrice':   str(stuff["quotes"]["quote"]["open"]),
                'shares':       rand
            })
        return jsonify(tmp), 200
