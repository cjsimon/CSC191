from flask import Flask
from .configuration import get_environment_config
from .database import Database

def create_app(env, create_tables):
    """
    Create a flask instance with a specified config
    """
    app = Flask(__name__)
    env_config = get_environment_config(env)
    app.config.from_object(env_config)

    # Create a db instance with a scoped session and base
    # Bind it to the app
    db = Database(app, create_tables)

    # Register routes and bind them to the app
    from api.routes import Routes
    routes = Routes(db)
    app.register_blueprint(routes.api)

    return app
