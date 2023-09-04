Assumptions:
1. The webpage will have a simple layout with a header, a section for filters (genre and theme), and a section to display the recommended anime.
2. The MyAnimeList API provides endpoints to fetch anime by genre and theme.
3. The API key is used in the header of the API request.
4. The API returns a list of anime with their details which can be displayed on the webpage.

Core classes, functions, methods:
1. `fetchAnimeByGenre(genre)`: Fetches anime by genre from the MyAnimeList API.
2. `fetchAnimeByTheme(theme)`: Fetches anime by theme from the MyAnimeList API.
3. `displayAnime(animeList)`: Displays the fetched anime on the webpage.

index.html
