"use strict";
const inputEl = document.querySelector(".search-input-area");
const searchBtn = document.querySelector(".search-btn");
const movieDivEl = document.querySelector(".movie-div");


// Here is your key: 8149b202
// https://www.omdbapi.com/

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=8149b202

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=eaf2aa07-b07e-4fef-90bb-45a30d79753c
// If you did not make this request, please disregard this email.

// search items
// data.Title, data.Runtime,data.Genre, data.Plot, data.Ratings[0].Value   "8.8/10"

// const rating = "8.8/10"
// console.log(rating.slice(0,-3))
async function searchByTitle() {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${inputEl.value}&apikey=8149b202`
    );
    const data = await response.json();
    console.log(data)
   
    // console.log(localStorage.getItem('movieData' ))
    movieDivEl.innerHTML = renderHTML(data)
   
  
  } catch (err) {
    movieDivEl.innerHTML = `<div class="error-msg" > Unable to find what you're looking for. Please try another search.</div>`

  }}
// }"Unable to find what you're lookingfor.Please try another search."
searchBtn.addEventListener("click", searchByTitle);
// searchByTitle("inception");
// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   searchByTitle(inputEl.value);
// });
// fetch(`http://www.omdbapi.com/?t=inception&apikey=8149b202`).then(resp=> resp.json().then(data=> console.log(data)))
function renderHTML(data) {
  let html = `
  <div class = "movie-card row gap-one center">
  <div class="movie-poster row center ">
      <img class ="movie-poster-img" src=${data.Poster} alt="poster for ${data.Title}"/>
  </div>

  <div class = "movie-info-div row col  ">
     <div class="movie-title-rating-div row  center ">
        <h3 class ="movie-title">${data.Title}</h3>
        <img class= "star" src= "./images/star.png" alt="star emoji">
        <p class= "rating">${data.Ratings[0].Value.slice(0, -3)}</p>
    </div>

    <div class = "movie-info-text row gap-one" >
       <p class="runtime">${data.Runtime}</p>
       <p class="genre">${data.Genre}</p>
       <div class="add-div">
       <img class ="add" src="images/plus-no-bg.png" alt="add button with plus sign">
       <button class ="add-btn" onclick="addMovieToWatchlist()" >Watchlist</button>
       </div>
      </div>
      <div class = "movie-plot-div">
      <p class="movie-plot">${data.Plot}</p>

    </div>
    </div>
  </div>
  
 `;
  return html;
}
let watchlist =[localStorage.getItem('data')] || [];
function addMovieToWatchlist(){
 
  watchlist.push(movieDivEl.innerHTML)
  
  localStorage.setItem('data', watchlist)
  console.log(data);


}