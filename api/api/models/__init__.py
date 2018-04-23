from sqlalchemy.ext.declarative import declarative_base

class Models():
    # Generate a Base type for the models to inherit in order to satisfy subclass dependencies.
    # The Base will be populated with a specified base before the models are initialized
    Base = None

    def __init__(self, Base):
        self.Base = Base

    # Import all models being used in the application here
    def init_models(self):
        from .user import init as User
        from .stock import init as Stock
        from .profile import init as Profile
        from .paperportfolio import init as PaperPortfolio

        User(self.Base)
        Stock(self.Base)
        Profile(self.Base)
        PaperPortfolio(self.Base)
