function fetchAnimeRecommendations() {
    var genre = document.getElementById('genre').value;
    fetch('https://kitsu.io/api/edge/anime?filter[genres]=' + genre)
        .then(response => response.json())
        .then(data => displayRecommendations(data.data));
}

function displayRecommendations(animeList) {
    var recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = '';
    animeList.forEach(anime => {
        var div = document.createElement('div');
        div.textContent = anime.attributes.titles.en_jp;
        recommendations.appendChild(div);
    });
}
