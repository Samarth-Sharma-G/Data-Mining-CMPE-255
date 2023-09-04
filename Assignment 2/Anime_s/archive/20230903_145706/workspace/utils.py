import requests

def fetch_anime_data(anime_list):
    response = requests.get('https://api.jikan.moe/v3/genre/anime/1/1')
    data = response.json()
    for anime_data in data['anime']:
        anime = Anime(anime_data['title'], anime_data['genre'], anime_data['theme'], anime_data['score'])
        anime_list.add_anime(anime)

def create_dropdown_menu(anime_list):
    genres = set(anime.genre for anime in anime_list.anime_list)
    themes = set(anime.theme for anime in anime_list.anime_list)
    return genres, themes

def display_anime(anime):
    return f'Title: {anime.title}, Genre: {anime.genre}, Theme: {anime.theme}, Rating: {anime.rating}'
