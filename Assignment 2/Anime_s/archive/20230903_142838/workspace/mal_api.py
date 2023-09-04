import requests

API_KEY = '3d2f9fd7cac3fea652fa4bb529f510f57c836036285a785bc198d5e69049b69d'

def get_anime_data(genres, themes):
    response = requests.get(f'https://api.myanimelist.net/v2/anime?api_key={API_KEY}&fields=genres,themes')
    data = response.json()
    anime_list = AnimeList()
    for anime in data['data']:
        anime_list.add_anime(Anime(anime['title'], anime['genres'], anime['themes']))
    return anime_list.get_animes(genres, themes)
