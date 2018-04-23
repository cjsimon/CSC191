from sqlalchemy import Column, Integer, String, ForeignKey

def init(Base):
    class Profile(Base):
        __tablename__ = 'Profiles'
        email = Column(String(120), ForeignKey("Users.email"), unique=True, primary_key=True)
        name = Column(String(120), unique=False)
        sec1 = Column(String(120), unique=False)
        sec2 = Column(String(120), unique=False)
        ans1 = Column(String(120), unique=False)
        ans2 = Column(String(120), unique=False)

        def __init__(self, email=None, name=None, sec1=None, sec2=None, ans1=None, ans2=None):
            self.email = email
            self.name = name
            self.sec1 = sec1
            self.sec2 = sec2
            self.ans1 = ans1
            self.ans2 = ans2
