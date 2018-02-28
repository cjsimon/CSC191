class Config(object):
	"""
	Configuration base, for all environments.
	"""
	DEBUG = False
	TESTING = False
	CSRF_ENABLED = True
	SQLALCHEMY_TRACK_MODIFICATIONS = False

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'PROD'
    pass

# Preproduction environment
class StagingConfig(Config):
	SQLALCHEMY_DATABASE_URI = 'STAGE'
	pass

# Shared development environment
class DevelopmentConfig(Config):
	SQLALCHEMY_DATABASE_URI = 'DEV'
	DEBUG = True

# Local testing environment
class TestingConfig(Config):
	SQLALCHEMY_DATABASE_URI = 'LOCAL'
	TESTING = True
