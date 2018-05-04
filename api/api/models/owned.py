from sqlalchemy import Column, Integer, String

def init(Base):
    class Stock(Base):
        __tablename__ = 'Owned'
        uid = Column(Integer, ForeignKey("Users.uid"), primary_key=True)
        stock = Column(String(6), primary_key=True)
        amount = Column(Integer, unique=False)

        def __init__(self, uid=None, stock=None, amount=None):
            self.symbol = symbol
            self.name = name
