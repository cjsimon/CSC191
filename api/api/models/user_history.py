from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy import ForeignKey, PrimaryKeyConstraint, ForeignKeyConstraint
from api.serializer import Serializer

def init(Base):
    class User_History(Base):
        __tablename__  = 'User_Histories'
        uid            = Column(Integer, ForeignKey('Users.uid'))
        stock          = Column(String(6))
        time           = Column(DateTime, default=datetime.utcnow)
        amount         = Column(Integer, unique=False)
        bought_or_sold = Column(Boolean, unique=False)
        PrimaryKeyConstraint(uid, stock, time, amount)

        def __init__(self, uid=None, stock=None, amount=None, bought=None):
            self.uid    = uid
            self.stock  = stock
            self.amount = amount
            self.bought = bought

        def serialize(self):
            Serializer.serialize(self)

    return User_History
