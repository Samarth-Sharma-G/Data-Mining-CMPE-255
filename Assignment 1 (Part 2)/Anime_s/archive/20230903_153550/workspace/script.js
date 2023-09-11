const genreSelect = document.getElementById('genre');
const animeRecommendations = document.getElementById('anime-recommendations');

genreSelect.addEventListener('change', function() {
    fetchAnimeData(this.value);
});

function fetchAnimeData(genre) {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genre}`)
        .then(response => response.json())
        .then(data => filterAnimeData(data.anime))
        .catch(error => console.error('Error:', error));
}

function filterAnimeData(animeData) {
    const filteredAnimeData = animeData.filter(anime => anime.type === 'TV');
    displayAnimeRecommendations(filteredAnimeData);
}

function displayAnimeRecommendations(animeData) {
    animeRecommendations.innerHTML = '';
    animeData.forEach(anime => {
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime');
        animeDiv.innerHTML = `
            <h2>${anime.title}</h2>
            <img src="${anime.image_url}" alt="${anime.title}">
            <p>${anime.synopsis}</p>
        `;
        animeRecommendations.appendChild(animeDiv);
    });
}
