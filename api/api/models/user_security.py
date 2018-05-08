from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy import ForeignKey, PrimaryKeyConstraint, ForeignKeyConstraint
from api.serializer import Serializer

def init(Base):
    class User_Security(Base):
        __tablename__ = 'User_Security'
        uid      = Column(Integer, ForeignKey('User.uid'))
        password = Column(String(120), unique=False)
        q1       = Column(String(120), unique=False)
        q2       = Column(String(120), unique=False)
        q3       = Column(String(120), unique=False)
        a1       = Column(String(120), unique=False)
        a2       = Column(String(120), unique=False)
        a3       = Column(String(120), unique=False)
        PrimaryKeyConstraint(uid)

        def __init__(self, uid=None, password=None,
                     q1=None, q2=None, q3=None,
                     a1=None, a2=None, a3=None):
            self.uid      = uid
            self.password = password
            self.q1       = q1
            self.q2       = q2
            self.q3       = q3
            self.a1       = a1
            self.a2       = a2
            self.a3       = a3

        def serialize(self):
            Serializer.serialize(self)

    return User_Security
