Given the requirements and assumptions, we will be using Python with Flask for the backend and HTML, CSS, and JavaScript for the frontend. We will also use the requests library to make API calls to MyAnimeList.

The core classes and functions will include:

1. `Anime`: A class to represent an anime with attributes like title, genre, theme, etc.
2. `AnimeList`: A class to represent a list of animes. It will have methods to add an anime to the list and to get animes based on genre and theme.
3. `get_anime_data`: A function to fetch anime data from MyAnimeList using the provided API key.
4. `app`: The Flask application.
5. `index`: The function to render the main page of the web application.
6. `get_recommendations`: The function to handle the POST request when a user selects genres and themes and to return the recommended animes.

Now, let's start with the entrypoint file, `app.py`.

app.py
