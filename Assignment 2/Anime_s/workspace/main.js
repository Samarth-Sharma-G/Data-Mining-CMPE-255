document.getElementById('genre').addEventListener('change', function() {
    fetchAnimeData(this.value);
});

function fetchAnimeData(genre) {
    fetch(`https://kitsu.io/api/edge/anime?filter[genres]=${genre}`)
        .then(response => response.json())
        .then(data => {
            const animeData = data.data;
            displayAnimeData(animeData);
        })
        .catch(error => console.error('Error:', error));
}

function displayAnimeData(animeData) {
    const animeList = document.getElementById('anime-list');
    animeList.innerHTML = '';
    animeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.innerHTML = `
            <h2>${anime.attributes.titles.en_jp}</h2>
            <img src="${anime.attributes.posterImage.small}" alt="${anime.attributes.titles.en_jp}">
            <p>${anime.attributes.synopsis}</p>
        `;
        animeList.appendChild(animeCard);
    });
}
