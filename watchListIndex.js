"use strict";

const myWatchListEl = document.getElementById("watch-list");

let watchListMovies = Object.values(localStorage);

let watchListMoviesArray = watchListMovies.map((el) => JSON.parse(el));

let watchListHtml = "";
watchListHtml += watchListMoviesArray.map((data) => renderWatchlistHtml(data));

myWatchListEl.innerHTML = watchListHtml;

function renderWatchlistHtml(data) {
  let html = `
    <div class = "movie-card row gap-one center">
    <div class="movie-poster row center ">
        <img class ="movie-poster-img" src=${data.poster} alt="poster for ${data.title}"/>
    </div>
  
    <div class = "movie-info-div row col">
       <div class="movie-title-rating-div row  center ">
          <h3 class ="movie-title">${data.title}</h3>
          <img class= "star" src= "./images/star.png" alt="star emoji">
          <p class= "rating">${data.rating}</p>
      </div>
  
      <div class = "movie-info-text row gap-one" >
         <p class="runtime">${data.runTime}</p>
         <p class="genre">${data.genre}</p>
  
         <div class="remove-div">
         <img class ="remove" src="images/minus-icon-no-bg.png" alt="remove button with minus sign">
          <button class ="remove-btn"  id = "${data.id}" >Remove</button>
         </div>
        </div>
        <div class = "movie-plot-div">
        <p class="movie-plot">${data.moviePlot}</p>
  
      </div>
      </div>
    </div>
    
   `;
  return html;
}

myWatchListEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-btn")) {
    removeMovieFromWatchList(e);
  }
});

function removeMovieFromWatchList(e) {
  e.target.closest(".movie-card").remove();
  localStorage.removeItem(e.target.id);
}
