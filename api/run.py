import os
import sys
from tendo import singleton
from api import argparser, create_app


def main():
    args = argparser.get_args()

    # Fork the process if requested as to run it as a dameon
    if args.dameon and os.fork():
        sys.exit()

    port = int(os.environ.get("PORT", args.port))
    app = create_app(args.env, args.create)
    app.run(host='0.0.0.0',debug=True, port=port)

if __name__ == "__main__":
    main()
