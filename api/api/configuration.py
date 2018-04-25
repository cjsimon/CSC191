import sys
from enum import Enum

class Environment(Enum):
    PRODUCTION  = 'PRODUCTION'
    STAGING     = 'STAGING'
    DEVELOPMENT = 'DEVELOPMENT'
    TESTING     = 'TESTING'

    def __str__(self):
        return self.name

DEFAULT_ENV = Environment.TESTING
DEFAULT_PORT = 5000

# Configuration base for all environments
class Config(object):
    CSRF_ENABLED = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False

# Live environment with production data
class ProductionConfig(Config):
    # dialect+driver://username:password@host/:port/database
    SQLALCHEMY_DATABASE_URI = \
        'mysql+mysqlconnector://$USER:$PASS@$HOST/$DB'
    SECRET_KEY = 'E?MF@p,dG^2?t|d<'

# Preproduction environment with production data
class StagingConfig(Config):
    SQLALCHEMY_DATABASE_URI = \
        'mysql+mysqlconnector://$USER:$PASS@$HOST/$DB'
    SECRET_KEY = '/sgbLm3DA#>)+ZQ{'

# Shared development environment with shared data
class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = \
        'mysql+mysqlconnector://xmensp_user:xmensp_db@athena.ecs.csus.edu/xmensp'
    SECRET_KEY = '78B_B?rY&x(u52n*'
    SQLALCHEMY_ECHO = True

# Local testing environment with local data
class TestingConfig(Config):
    SQLALCHEMY_DATABASE_URI = \
        'mysql+mysqlconnector://jetstox:1234@localhost/jetstox'
    SECRET_KEY = '4th&$Y9De{U/X$>A'
    SQLALCHEMY_ECHO = True

def get_environment_config(env):
    env_selection = {
        Environment.PRODUCTION:  ProductionConfig(),
        Environment.STAGING:     StagingConfig(),
        Environment.DEVELOPMENT: DevelopmentConfig(),
        Environment.TESTING:     TestingConfig()
    }
    selected_env = env_selection.get(env)

    if selected_env is None:
        sys.exit(
            'Environment error: %s is not a valid configuration!\nPossible values are %s'
            % (env, [(env.value) for env in Environment]))
    else:
        return selected_env
