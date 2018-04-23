from sqlalchemy import Column, Integer, String

def init(Base):
    class User(Base):
        __tablename__ = 'Users'
        email = Column(String(120), unique=True, primary_key=True)
        password = Column(String(120), unique=False)

        def __init__(self, email=None, password=None):
            self.email = email
            self.password = password

        def __repr__(self):
            return '<Email: %r\nPassword: %r>' % (self.email, self.password)
