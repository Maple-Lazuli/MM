from flask import Flask, request
import pandas as pd
import numpy as np

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route("/", methods=["GET"])
def root():
    message = request.json['message']
    print(message)
    return message


def main():
    app.run(host='0.0.0.0', port=3001)


if __name__ == "__main__":
    main()
