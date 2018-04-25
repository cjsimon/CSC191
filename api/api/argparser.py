import sys
import argparse as ap
from . import configuration as config

parser = ap.ArgumentParser(description='Jetstocks Flask API')
parser.add_argument(
    '-e', '--env',
    help='Environment to use when launching the api. (Default is %s)' %(config.DEFAULT_ENV),
    type=config.Environment, required=False, default=config.DEFAULT_ENV)
parser.add_argument(
    '-p', '--port',
    help='Port to launch server on. (Default is %s)' %(config.DEFAULT_PORT),
    type=int, required=False, default=config.DEFAULT_PORT)
parser.add_argument(
    '-c', '--create',
    help='Use this flag to create tables',
    action='store_true')
parser.add_argument(
    '-d', '--dameon',
    help='Use this flag to dameonize the process',
    action='store_true')

def parse_args():
    """
    Parse arguments from the command
    """
    return parser.parse_args()

def verify_args(args):
    """
    Custom rules to verify a set of arguments against a specific ruleset
    This is a fallback if argparse does not catch an error that we want to
    """
    # Verify the env arg if a value was passed in for it
    if args.env != None:
        try:
            # Try to select the environment specified to see if it is valid
            config.Environment(args.env)
        except (ValueError, KeyError):
            environment_names = [(env.value) for env in config.Environment]
            parser.print_help()
            sys.exit(
                '\n%s is not a valid configuration!\nPossible values are %s'
                % (args.env, environment_names))

def get_args():
    """
    Parse and verify arguments and return for valid use
    """
    args = parse_args()
    verify_args(args)
    return args
