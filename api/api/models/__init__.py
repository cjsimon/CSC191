from sqlalchemy.ext.declarative import declarative_base

class Models():
    # Generate a Base type for the models to inherit in order to satisfy subclass dependencies.
    # The Base will be populated with a specified base before the models are initialized
    Base = None
    models = {}

    def __init__(self, Base):
        self.Base = Base

    # Import all models being used in the application here
    def init_models(self):
        from .user          import init as User
        from .user_stock    import init as User_Stock
        from .user_security import init as User_Security
        from .user_history  import init as User_History

        # Pass a self reference of the created modules to the caller for the routes
        self.models.update({
            'User'         : User(self.Base),
            'User_Stock'   : User_Stock(self.Base),
            'User_Security': User_Security(self.Base),
            'User_History' : User_History(self.Base)
        })
        return self

    def get_module(self, model=None):
        if model is None:
            pass

        return self.models[model]
