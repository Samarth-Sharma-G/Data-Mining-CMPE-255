class Anime:
    def __init__(self, title, genre, theme, rating):
        self.title = title
        self.genre = genre
        self.theme = theme
        self.rating = rating

class AnimeList:
    def __init__(self):
        self.anime_list = []

    def add_anime(self, anime):
        self.anime_list.append(anime)

    def get_anime_by_genre(self, genre):
        return [anime for anime in self.anime_list if anime.genre == genre]

    def get_anime_by_theme(self, theme):
        return [anime for anime in self.anime_list if anime.theme == theme]

    def get_highest_rated(self, genre, theme):
        genre_anime = self.get_anime_by_genre(genre)
        theme_anime = self.get_anime_by_theme(theme)
        return max(genre_anime + theme_anime, key=lambda anime: anime.rating)
