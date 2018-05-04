from sqlalchemy import Column, Integer, String, ForeignKey
from datetime import datetime

def init(Base):
    class Profile(Base):
        __tablename__ = 'History'
        uid = Column(Integer, ForeignKey("Users.uid"), primary_key=True)
        stock = Column(String(6), primary_key=True)
        time = Column(DateTime, primary_key=True, default=datetime.utcnow)
        amount = Column(Integer, unique=False)
        bought = Column(Boolean, unique=False)

        def __init__(self, uid=None, stock=None, amount=None, bought=None):
            self.uid = uid
            self.stock = stock
            self.amount = amount
            self.bought = bought
