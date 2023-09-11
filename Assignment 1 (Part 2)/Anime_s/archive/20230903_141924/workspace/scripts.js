const API_KEY = '3d2f9fd7cac3fea652fa4bb529f510f57c836036285a785bc198d5e69049b69d';

function fetchAnimeByGenre(genre) {
    // Fetch anime by genre from the MyAnimeList API
    // This is a placeholder and needs to be replaced with the actual API endpoint
    fetch(`https://api.myanimelist.net/v2/anime?genre=${genre}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => displayAnime(data));
}

function fetchAnimeByTheme(theme) {
    // Fetch anime by theme from the MyAnimeList API
    // This is a placeholder and needs to be replaced with the actual API endpoint
    fetch(`https://api.myanimelist.net/v2/anime?theme=${theme}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => displayAnime(data));
}

function displayAnime(animeList) {
    // Display the fetched anime on the webpage
    const animeListSection = document.getElementById('anime-list');
    animeListSection.innerHTML = '';
    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';
        animeCard.innerHTML = `
            <h2>${anime.title}</h2>
            <img src="${anime.image_url}" alt="${anime.title}">
            <p>${anime.synopsis}</p>
        `;
        animeListSection.appendChild(animeCard);
    });
}

function fetchRecommendations() {
    const genre = document.getElementById('genre').value;
    const theme = document.getElementById('theme').value;
    fetchAnimeByGenre(genre);
    fetchAnimeByTheme(theme);
}
