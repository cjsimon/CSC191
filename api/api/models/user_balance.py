from datetime import datetime
from sqlalchemy import Column, Integer, Float
from sqlalchemy import ForeignKey, PrimaryKeyConstraint, ForeignKeyConstraint
from api.serializer import Serializer

def init(Base):
    class User_Balance(Base):
        __tablename__  = 'User_Balance'
        uid            = Column(Integer, ForeignKey('User.uid'))
        balance        = Column(Float)
        PrimaryKeyConstraint(uid)

        def __init__(self, uid=None, balance=None):
            self.uid    = uid
            self.balance = balance

        def serialize(self):
            Serializer.serialize(self)

    return User_Balance
