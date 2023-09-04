class Anime:
    def __init__(self, title, genres, themes):
        self.title = title
        self.genres = genres
        self.themes = themes

class AnimeList:
    def __init__(self):
        self.animes = []

    def add_anime(self, anime):
        self.animes.append(anime)

    def get_animes(self, genres, themes):
        return [anime for anime in self.animes if set(genres).intersection(anime.genres) and set(themes).intersection(anime.themes)]
