from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy import ForeignKey, PrimaryKeyConstraint, ForeignKeyConstraint
from api.serializer import Serializer

def init(Base):
    class User_Stock(Base):
        __tablename__ = 'User_Stocks'
        uid    = Column(Integer, ForeignKey('Users.uid'))
        name   = Column(String(10), unique=False)
        amount = Column(Integer, unique=False)
        PrimaryKeyConstraint(uid, name)

        def __init__(self, uid=None, name=None, amount=None):
            self.uid    = uid
            self.name   = name
            self.amount = amount

        def serialize(self):
            Serializer.serialize(self)

    return User_Stock
