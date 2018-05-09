import json
import smtplib
import http.client
import random
import requests
import datetime
from flask import Blueprint, url_for, request, jsonify, abort
from sqlalchemy import text
class Routes:
    api = Blueprint('api', __name__)

    def __init__(self, database):
        global db # self cannot be passed in blueprint route definitions
        db = database

    @api.route('/demo')
    def demoThings():
        showtime = datetime.datetime.now().strftime("%Y%m%d %H:%M:%S")
        return jsonify({"value":showtime}), 200

    @api.route('/users/', methods=['GET', 'POST'])
    def users():
        if request.method == 'POST':
            if request.headers['Content-Type'] == 'application/json':
                # Get the given POST data
                given_username = request.json["username"]
                given_password = request.json["password"]

                with db.engine.connect() as connection:
                    """
                    Execute a query.

                    Automatically commit stashed changes
                    to the database if any changes exist
                    as indicated in the flask session
                    @see database.py
                    """

                    # Prepare and execute the sql with the the provided repalcement paramaters
                    results = connection.execute(
                        text( # Prepare the raw sql statement
                            """
                            SELECT COUNT(*), Users.uid
                            FROM `User`, `User_Security`
                            INNER JOIN User AS U
                                ON U.uid = User_Security.uid
                            WHERE
                                User.username         = :username AND
                                User_Security.password = :password
                            GROUP BY Users.uid
                            """
                        ),
                        username = given_username,
                        password = given_password
                    )

                    # This part is not working
                    for row in results:
                        print(row['uid'])
                    return results, 200

            # POST request not made
            abort(404)

    @api.route('/api/v1/UserAccountApplicationVerification', methods = ['POST'])
    def process_user_account_request():
        data = request.get_json()
        email = data["email"]
        username = data["username"]
        #SQL QUERY HERE EMAIL
        #SELECT email, username FROM users WHERE users.email = [email] AND users.username = email
        #save the amount of results into rows
        print (email+" "+username)
        checkUsername = 0
        checkEmail = 0
        with db.engine.connect() as connection:

            # Prepare and execute the sql with the the provided repalcement paramaters
            results = connection.execute(
                text( # Prepare the raw sql statement
                " select count(email) from User where User.email = :email;"
                ),
                email = email,
            )
            for row in results:
                checkEmail = row["count(email)"]

            # Prepare and execute the sql with the the provided repalcement paramaters
            results = connection.execute(
                text( # Prepare the raw sql statement
                " select count(username) from User where User.username = :username;"
                ),
                username = username,
            )
            for row in results:
                checkUsername = row["count(username)"]
        rows = 1
        status = "sucess"
        message = ""
        if checkEmail != 0:
            status = 'error',
            message +=  'That email\'s already taken.\nPlease use another email.'

        if checkUsername != 0:
            status = 'error',
            message +=  'That username\'s already taken.\nPlease use another username.'

        response = {
            'status': status,
            'message': message,
        }
        return jsonify(response), 200

    @api.route('/api/v1/AccountCreation', methods = ['POST'])
    def process_account_creation():
        data = request.get_json() #stores all relevant info

        maxIndex = 0
        with db.engine.connect() as connection:

            # Prepare and execute the sql with the the provided repalcement paramaters
            results = connection.execute(
                text( # Prepare the raw sql statement
                " select count(uid) from User;"
                )
            )
            for row in results:
                maxIndex = row["count(uid)"]
            maxIndex += 1
            tmpBday = ""
            results = connection.execute(
                text( # Prepare the raw sql statement
                "insert into User(uid,username,email,birthday,phone) values (:uid,:username,:email,:birthday,:phone);"),
                uid=maxIndex,
                username=data["username"],
                email=data["email"],
                birthday=data["bday"],
                phone=data["phone"]
                )
            results = connection.execute(
                text( # Prepare the raw sql statement
                "insert into User_Security(uid,q1,a1,q2,a2,q3,a3,password) values (:uid,:q1,:a1,:q2,:a2,:q3,:a3,:password);"),
                uid=maxIndex,
                password=data["password"],
                q1=data["q1"],
                a1=data["a1"],
                q2=data["q2"],
                a2=data["a2"],
                q3=data["q3"],
                a3=data["a3"]
                )
            results = connection.execute(
                text( # Prepare the raw sql statement
                "insert into User_Balance(uid,balance) values (:uid,:balance);"),
                uid=maxIndex,
                balance=10000
                )
        return '', 200

    @api.route('/api/v1/Login',methods = ['POST'])
    def process_login():
        data = request.get_json()
        uid = 0
        username = data['username']
        password = data['password']
        email = ""
        q = ["","",""]
        a = ["","",""]
        phone = ""
        bday = ""
        balance = ""
        #SQL QUERY HERE
        #SELECT username FROM users WHERE users.username=username AND users.password=password
        #save the amount of results into rows
        with db.engine.connect() as connection:

            # Prepare and execute the sql with the the provided repalcement paramaters
            results = connection.execute(
                text( # Prepare the raw sql statement
                " select * from User, User_Security where User.username = :username AND User.uid = User_Security.uid AND User_Security.password = :password;"
                ),
                username = username,
                password = password
            )
            for row in results:
                uid = row["uid"]
                username = row["username"]
                email = row["email"]
                password = row["password"]
                q[0] = row["q1"]
                a[0] = row["a1"]
                q[1] = row["q2"]
                a[1] = row["a2"]
                q[2] = row["q3"]
                a[2] = row["a3"]
                phone = row["phone"]
                bday = row["birthday"]
            results = connection.execute(
                text( # Prepare the raw sql statement
                " select User_Balance.balance from User, User_Balance where User.uid = User_Balance.uid AND User.uid = :uid;"
                ),
                uid = uid
            )
            for row in results:
                balance = row["balance"];

        resp = False
        if uid != 0:
            resp = True

        return jsonify([{"resp":str(resp),
        'username': username,
        "email": email,
        "password": password,
        "phone": phone,
        "bday": bday,
        "q1":q[0],
        "a1":a[0],
        "q2":q[1],
        "a2":a[1],
        "q3":q[2],
        "a3":a[2],
        "balance":balance}]), 200

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
            print("SOMETHING ")
            #SQL QUERY HERE
            #replace email and password where the entery.email=email
            response = [{
                'response': resp
            }]

        response = [{'response': resp}]
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

    @api.route('/api/v1/sellStocks', methods=['GET', 'POST'])
    def sellStocks():
        targ = request.get_json()
        uid = 0
        needUpdate = 0
        with db.engine.connect() as connection:
            results = connection.execute(
                text( # Prepare the raw sql statement
                "select User.uid from User, User_Security where User.username = :username and User_Security.password = :password and User.uid = User_Security.uid;"
                ),
                username = targ["username"],
                password = targ["password"]
            )
            for row in results:
                uid = row["uid"]
            results = connection.execute(
                text( # Prepare the raw sql statement
                "select User_Stock.amount from User_Stock where User_Stock.uid = :uid and User_Stock.name = :name;"
                ),
                uid = uid,
                name = targ["name"],
            )
            for row in results:
                needUpdate= row["amount"]
            if needUpdate - targ["amount"] <= 0:
                results = connection.execute(
                    text( # Prepare the raw sql statement
                    "delete from User_Stock where User_Stock.uid = :uid and User_Stock.name = :name;"
                    ),
                    uid = uid,
                    name = targ["name"],
                )
            else:
                results = connection.execute(
                    text( # Prepare the raw sql statement
                    "update User_Stock set User_Stock.amount = User_Stock.amount - :amount where User_Stock.uid = :uid and User_Stock.name = :name;"
                    ),
                    uid = uid,
                    amount = targ["amount"],
                    name = targ["name"],
                )
            results = connection.execute(
                text( # Prepare the raw sql statement
                "insert into User_Historie(uid,stock,time,amount,bought_or_sold) values (:uid,:stock,:time,:amount,:bought_or_sold);"
                ),
                uid = uid,
                stock = targ["name"],
                time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                amount = targ["amount"],
                bought_or_sold = targ["type"]

            )

        return jsonify({ 'Sell': "Stocks" }), 200


    @api.route('/api/v1/buyStocks', methods=['GET', 'POST'])
    def buyStockS():
        targ = request.get_json()
        #print(targ["name"]+" "+str(targ["amount"])+" "+targ["type"]+" "+targ["username"]+" "+targ["password"])
        uid = 0
        needUpdate = 0
        with db.engine.connect() as connection:

            # Prepare and execute the sql with the the provided repalcement paramaters
            results = connection.execute(
                text( # Prepare the raw sql statement
                "select User.uid from User, User_Security where User.username = :username and User_Security.password = :password and User.uid = User_Security.uid;"
                ),
                username = targ["username"],
                password = targ["password"]
            )
            for row in results:
                uid = row["uid"]
            #print (str(uid) +" "+targ["username"])

            results = connection.execute(
                text( # Prepare the raw sql statement
                "select count(*) from User_Stock where User_Stock.uid = :uid and User_Stock.name = :name;"
                ),
                uid = uid,
                name = targ["name"],
            )
            for row in results:
                needUpdate= row["count(*)"]
            if needUpdate <= 0:
                results = connection.execute(
                    text( # Prepare the raw sql statement
                    "insert into User_Stock(uid,name,amount) values (:uid,:name,:amount);"
                    ),
                    uid = uid,
                    name = targ["name"],
                    amount = targ["amount"]
                )
            else:
                results = connection.execute(
                    text( # Prepare the raw sql statement
                    "update User_Stock set User_Stock.amount = User_Stock.amount + :amount where User_Stock.uid = :uid and User_Stock.name = :name;"
                    ),
                    uid = uid,
                    name = targ["name"],
                    amount = targ["amount"]
                )

            results = connection.execute(
                text( # Prepare the raw sql statement
                "insert into User_Historie(uid,stock,time,amount,bought_or_sold) values (:uid,:stock,:time,:amount,:bought_or_sold);"
                ),
                uid = uid,
                stock = targ["name"],
                time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                amount = targ["amount"],
                bought_or_sold = targ["type"]

            )



        return jsonify({ 'Buy': "Stocks" }), 200




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
        rand = 1
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
                    i += 1
        else:
            tmp.append({
                'name':         str(stuff["quotes"]["quote"]["description"]),
                'change':       str(stuff["quotes"]["quote"]["change"]),
                'changeP':      str(stuff["quotes"]["quote"]["change_percentage"]),
                'code':         str(stuff["quotes"]["quote"]["symbol"]),
                'TodayPrice':   str(stuff["quotes"]["quote"]["open"]),
                'shares':       rand
            })
        return jsonify(tmp), 200
