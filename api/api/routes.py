import json
import requests
from flask import Blueprint, url_for, request, jsonify

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

    @api.route('/api/v1/demo/')
    def sql_demo():
        #User.query.filter(User.name == 'admin').first()
        result = db.engine.execute("SELECT * FROM Users")
        return jsonify([{'test': 'data'}]), 200
