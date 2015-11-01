#!/usr/bin/env python

from flask import Flask
from flask import render_template
import pandas as pd

app = Flask(__name__)
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')

df = pd.read_csv("data/matches-spark3.csv",";")

@app.route("/match/<gameId>")
def match(gameId):
    return render_template('index.jade', data=df[df["gameId"]==int(gameId)].iloc[0])

if __name__ == "__main__":
    app.run(debug=True)
