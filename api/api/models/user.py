from sqlalchemy import Column, Integer, String

def init(Base):
    class User(Base):
        __tablename__ = 'User'
        uid = Column(Integer, ForeignKey("Users.uid"), primary_key=True)
        username = Column(String(120), unique=False)
        email = Column(String(120),  unique=True)
        birthday = Column(String(8), unique=False)
        phone = Column(String(50), unique=False)
        sec1 = Column(String(120), unique=False)
        sec2 = Column(String(120), unique=False)
        sec3 = Column(String(120), unique=False)
        ans1 = Column(String(120), unique=False)
        ans2 = Column(String(120), unique=False)
        ans3 = Column(String(120), unique=False)

        def __init__(self, usrname=None, email=None, sec1=None, sec2=None, sec3=None, ans1=None, ans2=None, ans3=None):
            self.username = username
            self.email = email
            self.sec1 = sec1
            self.sec2 = sec2
            self.sec3 = sec3
            self.ans1 = ans1
            self.ans2 = ans2
            self.ans3 = ans3

        def __repr__(self):
            return '<Email: %r\nPassword: %r>' % (self.email, self.password)
