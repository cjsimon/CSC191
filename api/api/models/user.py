from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy import ForeignKey, PrimaryKeyConstraint, ForeignKeyConstraint
from api.serializer import Serializer

def init(Base):
    class User(Base):
        __tablename__ = 'Users'
        uid      = Column(Integer)
        username = Column(String(120), unique=True)
        email    = Column(String(120), unique=True)
        birthday = Column(String(8),   unique=False)
        phone    = Column(String(50),  unique=False)
        PrimaryKeyConstraint(uid)

        # Initialize the current instance's colums with the input data
        # This allows for adding user instasnces to the database as single entries
        def __init__(self, username=None, email=None, birthday=None, phone=None):
            self.username = username
            self.email    = email
            self.birthday = birthday
            self.phone    = phone

        def __repr__(self):
            return '<ID: %r\nUsername: %r>' % (self.uid, self.username)

        def serialize(self):
            Serializer.serialize(self)

    return User
