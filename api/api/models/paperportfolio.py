from sqlalchemy import Column, Integer, String, ForeignKey

def init(Base):
    class PaperPortfolio(Base):
        __tablename__ = 'PaperPortfolios'
        email = Column(String(120), ForeignKey("Users.email"), primary_key=True)
        symbol = Column(String(120), ForeignKey("Stocks.symbol"), primary_key=True)
        amount = Column(Integer)

        def __init__(self, symbol=None, name=None):
            self.symbol = symbol
            self.name = name
