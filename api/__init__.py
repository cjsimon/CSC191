from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from api import configuration

app = Flask(__name__)

# Change this to the desired environment
config = configuration.DevelopmentConfig
app.config.from_object(config)

db = SQLAlchemy(app)

from api import routes
