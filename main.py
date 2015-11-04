#!/usr/bin/env python

import flask
from flask import Flask, request, send_from_directory, render_template
import pandas as pd

# set the project root directory as the static folder, you can set others.
app = Flask(__name__)
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')

df = pd.read_csv("data/matches-spark3.csv",";")

@app.route("/match/<gameId>")
def match(gameId):
    return render_template('index.html', data=df[df["gameId"]==int(gameId)].iloc[0])

@app.route("/api/match/<gameId>")
def api_match(gameId):
    d = df[df["gameId"]==int(gameId)].iloc[0]
    d['home'] = str(d['home'])
    return flask.jsonify(**d.to_dict())

if __name__ == "__main__":
    app.run(debug=True)
