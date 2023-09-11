from flask import Flask, render_template, request
from anime import Anime, AnimeList
from utils import fetch_anime_data, create_dropdown_menu, display_anime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    anime_list = AnimeList()
    fetch_anime_data(anime_list)
    genres, themes = create_dropdown_menu(anime_list)
    recommended_anime = None
    if request.method == 'POST':
        genre = request.form.get('genre')
        theme = request.form.get('theme')
        recommended_anime = anime_list.get_highest_rated(genre, theme)
    return render_template('index.html', genres=genres, themes=themes, anime=recommended_anime)

if __name__ == '__main__':
    app.run(debug=True)
