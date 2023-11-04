import '@fortawesome/fontawesome-free/js/all';
import './style.css'
import './spinner.css'


const global = {
    currentPage: window.location.pathname,
};

// Fetch data from TMDB Api
async function fetchAPIData(endpoint) {
    const API_KEY = '231dc6c02f8052f41c9a7eab739d777b';
    const API_URL = 'https://api.themoviedb.org/3/';

    showSpinner();

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US?`);

    const data = await response.json();

    hideSpinner();

    return data;
}

async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');
    
    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/movieDetails/index.html?id=${movie.id}">
            ${
                movie.poster_path
                 ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">` 
                 : `<img src="/placeholder.jpg" alt="${movie.title}">`
            }
        </a>
        <div class="hero-text">
          <h3>${movie.title}</h3>
          <p>${movie.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#popular-movies').appendChild(div);
    });
}

async function displayTrendingMovies() {
    const { results } = await fetchAPIData('trending/movie/day');

    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/movieDetails/index.html?id=${movie.id}">
        ${
            movie.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">` 
             : `<img src="/placeholder.jpg" alt="${movie.title}">`
        }
        <div class="slider-text">
          <h3>${movie.title}</h3>
          <p>${movie.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#trending-movies').appendChild(div);
    });
}

async function displayTopRatedMovies() {
    const { results } = await fetchAPIData('movie/top_rated');

    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/movieDetails/index.html?id=${movie.id}">
        ${
            movie.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">` 
             : `<img src="/placeholder.jpg" alt="${movie.title}">`
        }
        <div class="slider-text">
          <h3>${movie.title}</h3>
          <p>${movie.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#top-movies').appendChild(div);
    });
}

async function displayUpcomingMovies() {
    const { results } = await fetchAPIData('movie/upcoming');

    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/movieDetails/index.html?id=${movie.id}">
        ${
            movie.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">` 
             : `<img src="/placeholder.jpg" alt="${movie.title}">`
        }
        <div class="slider-text">
          <h3>${movie.title}</h3>
          <p>${movie.release_date}</p>
        </div>
        `;

        document.querySelector('#upcoming-movies').appendChild(div);
    });
}

async function displayMovieDetails() {
    const movieId = window.location.search.split('=')[1];

    const movie = await fetchAPIData(`movie/${movieId}`);
    console.log(movie);
    // Overlay for background image
    displayBackgroundImage('movie', movie.backdrop_path);

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="details-container">
      <div class="details-image">
      ${
        movie.poster_path
         ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">` 
         : `<img src="/placeholder.jpg" alt="${movie.title}">`
      }
      </div>
      <div class="details-content">
        <h2 class="title">${movie.title}</h2>
        <p class="rating">${movie.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></span></p>
        <div class="release-runtime">
            <p class="padding-right">${movie.release_date}</p>
            <p>${movie.runtime} minutes</p>
        </div>
        <ul class="genres">
            ${movie.genres.map((genre) => `<li class="padding-right">${genre.name}</li>`).join('')}
        </ul>
        <p class="overview">${movie.overview}</p>
        <ul class="production">
            ${movie.production_companies.map((company) => `<li class="padding-right">${company.name}</li>`).join('')}
        </ul>
        <p>Budget: $${addCommasToNumber(movie.budget)}</p>
      </div>
    </div>
    `;

    document.querySelector('#movie-details').appendChild(div);
}

async function displayTrendingShows() {
    const { results } = await fetchAPIData('trending/tv/day');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/showDetails/index.html?id=${show.id}">
        ${
            show.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">` 
             : `<img src="/placeholder.jpg" alt="${show.name}">`
        }
        <div class="slider-text">
          <h3>${show.name}</h3>
          <p>${show.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#trending-shows').appendChild(div);
    });
}

async function displayTopRatedShows() {
    const { results } = await fetchAPIData('tv/top_rated');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/showDetails/index.html?id=${show.id}">
        ${
            show.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">` 
             : `<img src="/placeholder.jpg" alt="${show.name}">`
        }
        <div class="slider-text">
          <h3>${show.name}</h3>
          <p>${show.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#top-shows').appendChild(div);
    });
}

async function displayPopularShows() {
    const { results } = await fetchAPIData('tv/popular');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/showDetails/index.html?id=${show.id}">
        ${
            show.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">` 
             : `<img src="/placeholder.jpg" alt="${show.name}">`
        }
        <div class="slider-text">
          <h3>${show.name}</h3>
          <p>${show.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#popular-shows').appendChild(div);
    });
}

async function displayOnAirShows() {
    const { results } = await fetchAPIData('tv/on_the_air');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <a href="/showDetails/index.html?id=${show.id}">
        ${
            show.poster_path
             ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">` 
             : `<img src="/placeholder.jpg" alt="${show.name}">`
        }
        <div class="slider-text">
          <h3>${show.name}</h3>
          <p>${show.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></p>
        </div>
        `;

        document.querySelector('#on-air').appendChild(div);
    });
}

async function displayShowDetails() {
    const showId = window.location.search.split('=')[1];

    const show = await fetchAPIData(`tv/${showId}`);
   
    // Overlay for background image
    displayBackgroundImage('tv', show.backdrop_path);

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="details-container">
      <div class="details-image">
      ${
        show.poster_path
         ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">` 
         : `<img src="/placeholder.jpg" alt="${show.name}">`
      }
      </div>
      <div class='details-content'>
        <h2 class="title">${show.name}</h2>
        <p class="rating">${show.vote_average.toFixed(1)} / 10 <i class="fa-regular fa-star"></i></span></p>
        <p class="air-date">Last Air Date: ${show.last_air_date}</p>
        <ul class="ep-seasons">
          <li class="padding-right"> ${show.number_of_seasons} Seasons</li>
          <li> ${show.number_of_episodes} Episodes</li>
        </ul>
        <ul class="genres">
            ${show.genres.map((genre) => `<li class="padding-right">${genre.name}</li>`).join('')}
        </ul>
        <p class="overview">${show.overview}</p>
        <ul class="production">
            ${show.production_companies.map((company) => `<li class="padding-right">${company.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    `;

    document.querySelector('#show-details').appendChild(div);
}


function displayBackgroundImage(type, backgroundPath) {
    const overlayDiv = document.createElement('div');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0',
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.1';

    if (type === 'movie') {
        document.querySelector('#movie-details').appendChild(overlayDiv);
    } else {
        document.querySelector('#show-details').appendChild(overlayDiv);
    }
}


function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    });
}

// Init app
function init() {
    switch (global.currentPage) {
        case'/':
        case '/index.html':
            displayPopularMovies();
            displayTrendingMovies();
            displayTrendingShows();
            break;
        case'/movies/':
            displayPopularMovies();
            displayTopRatedMovies();
            displayUpcomingMovies();
            break;
        case'/shows/':
            displayTopRatedShows();
            displayPopularShows();
            displayOnAirShows();
                break;
        case'/movieDetails/index.html':
            displayMovieDetails();
            break;
        case'/showDetails/index.html':
            displayShowDetails();
            break;
        case'/search/index.html':
            search();
            break;
    }

    highlightActiveLink();
}


document.addEventListener('DOMContentLoaded', init);
