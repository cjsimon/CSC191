from sqlalchemy import Column, Integer, String

def init(Base):
    class Stock(Base):
        __tablename__ = 'Stocks'
        symbol = Column(String(120), unique=True, primary_key=True)
        name = Column(String(120), unique=False)

        def __init__(self, symbol=None, name=None):
            self.symbol = symbol
            self.name = name
