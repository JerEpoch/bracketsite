""" Global Flask Application Settings """

import os
from app import app
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    PRODUCTION = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class Development(Config):
    MODE = 'Development'
    DEBUG = True
    SECRET_KEY = 'SuperSecretKey'


class Production(Config):
    MODE = 'Production'
    DEBUG = False
    PRODUCTION = True
    # SECRET_KEY = os.environ['SECRET_KEY']


# Set FLASK_CONFIG env to 'Production' or 'Development' to set Config
flask_config = os.environ.get('FLASK_CONFIG', 'Development')
app.config.from_object('app.config.{}'.format(flask_config))
