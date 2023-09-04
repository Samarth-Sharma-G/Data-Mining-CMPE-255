from flask import Flask, render_template, request
from anime import Anime, AnimeList
from mal_api import get_anime_data

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        genres = request.form.getlist('genres')
        themes = request.form.getlist('themes')
        animes = get_anime_data(genres, themes)
        return render_template('index.html', animes=animes)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
