"use strict";

const inputEl = document.querySelector(".search-input-area");
const searchBtn = document.getElementById("search-btn");
const movieDivEl = document.querySelector(".movie-div");
const myWatchListEl  = document.getElementById("watch-list")
// const myWatchListEl = document.querySelector("#watch-list")

let searchResultArray = [];
// let myWatchList = localStorage.getItem("watchListMovieIds")|| [];


async function searchByTitle() {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${inputEl.value}&type=movie&apikey=8149b202`
    );
    const data1 = await response.json();
    let movieArray = data1.Search;

    // console.log(movieArray);

    const moviePromises = movieArray.map(async (movie) => {
      const repsonse2 = await fetch(
        `http://www.omdbapi.com/?t=${movie.Title}&apikey=8149b202`
      );

      return repsonse2.json();
    });

    // searchResultArray = await Promise.all(moviePromises);
    searchResultArray = await Promise.allSettled(moviePromises);
    searchResultArray = await Promise.all(moviePromises);

    // console.log(searchResultArray);

    let movieHtml = searchResultArray
    
      .map((movie) => renderHTML(movie))
      .join("");
    // console.log(movieHtml);
    movieDivEl.innerHTML = movieHtml;
  } catch (err) {
    movieDivEl.innerHTML = `<div class="error-msg" > Unable to find what you're looking for. Please try another search.</div>`;
  }
}
searchBtn.addEventListener("click", searchByTitle);

function renderHTML(movie) {
  let html = `
  <div class = "movie-card row gap-one center">
  <div class="movie-poster row center ">
      <img class ="movie-poster-img" src=${movie.Poster} alt="poster for ${
    movie.Title
  }"/>
  </div>

  <div class = "movie-info-div row col  ">
     <div class="movie-title-rating-div row  center ">
        <h3 class ="movie-title">${movie.Title}</h3>
        <img class= "star" src= "./images/star.png" alt="star emoji">
        <p class= "rating">${movie.Ratings[0].Value.slice(0, -3)}</p>
    </div>

    <div class = "movie-info-text row gap-one" >
       <p class="runtime">${movie.runTime}</p>
       <p class="genre">${movie.Genre}</p>
       <div class="add-div">
       <img class ="add" src="images/plus-no-bg.png" alt="add button with plus sign">
       <button class ="add-btn"  id = "${movie.imdbID}"  >Watchlist</button>
       </div>
      </div>
      <div class = "movie-plot-div">
      <p class="movie-plot">${movie.Plot}</p>

    </div>
    </div>
  </div>
  
 `;
  return html;
}
// function renderWatchlistHtml(data) {
//   let html = `
//   <div class = "movie-card row gap-one center">
//   <div class="movie-poster row center ">
//       <img class ="movie-poster-img" src=${data.poster} alt="poster for ${
//     data.title
//   }"/>
//   </div>

//   <div class = "movie-info-div row col  ">
//      <div class="movie-title-rating-div row  center ">
//         <h3 class ="movie-title">${data.title}</h3>
//         <img class= "star" src= "./images/star.png" alt="star emoji">
//         <p class= "rating">${data.rating}</p>
//     </div>

//     <div class = "movie-info-text row gap-one" >
//        <p class="runtime">${data.runTime}</p>
//        <p class="genre">${data.genre}</p>

//        <div class="remove-div">
//        <img class ="remove" src="images/minus-icon-no-bg.png" alt="remove button with minus sign">
//         <button class ="remove-btn" >Remove</button>
//        </div>
//       </div>
//       <div class = "movie-plot-div">
//       <p class="movie-plot">${data.moviePlot}</p>

//     </div>
//     </div>
//   </div>
  
//  `;
//   return html;
// }


  document.querySelector(".movie-div").addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.classList.contains("add-btn")) {
    
  
  
  const id = e.target.id 
  
  const savedMovieEl= e.target.closest('.movie-card')
 
  const watchListMovie = {
    id: e.target.id,
    poster: savedMovieEl.querySelector('.movie-poster-img').src,
    title:savedMovieEl.querySelector('.movie-title').innerText,
    rating: savedMovieEl.querySelector('.rating').innerText,
    runTime: savedMovieEl.querySelector('.runtime').innerText,
    genre: savedMovieEl.querySelector('.genre').innerText,
    moviePlot:savedMovieEl.querySelector(".movie-plot").innerText
  }

  
      localStorage.setItem(id ,JSON.stringify(watchListMovie))
      let data = JSON.parse(localStorage.getItem(id.toString()));
       let watchListMovieHtml =renderWatchlistHtml(data)
       console.log(watchListMovieHtml);
       myWatchListEl.innerHTML =`<$ class = "movie-card row gap-one center">${watchListMovieHtml} </div>`
    }
  });
   



// localStorage.clear()

// let watchlist =JSON.parse(localStorage.getItem('data')) || [];


  //  localStorage.setItem("data", JSON.stringify( movieId))
  //  console.log(localStorage.getItem('data', JSON.parse(movieId)))

  // searchResultArray.find()

  // let removeDiv = document.createElement('div');
  // removeDiv.classList.add('remove-div')
  // removeDiv.innerHTML = `<img class ="remove" src="images/minus-icon-no-bg.png" alt="remove button with minus sign">
  //   <button class ="remove-btn" >Remove</button>`
  //  let addDiv = movieDivEl.querySelector('.add-div')

  //  addDiv.replaceWith(removeDiv)
  //  let data = JSON.parse(movieDivEl.innerHTML);
  //   watchlist.push(data)

  //   localStorage.setItem('data',JSON.stringify(watchlist))

  
  //    let removeDiv = document.createElement('div');
  // removeDiv.classList.add('remove-div')
  // removeDiv.innerHTML = `<img class ="remove" src="images/minus-icon-no-bg.png" alt="remove button with minus sign">
  //   <button class ="remove-btn" >Remove</button>`
  //  let addDiv = movieDivEl.querySelector('.add-div')
 
  //  addDiv.replaceWith(removeDiv)
  //  const savedMovieHtml= e.target.closest('.movie-card').innerHTML 
  //  let addDiv = movieDivEl.querySelector('.add-div')

   // const poster = savedMovieEl.querySelector('.movie-poster-img').innerText
  // const title =savedMovieEl.querySelector('.movie-title').innerText
  // const rating = savedMovieEl.querySelector('.rating').innerText
  // const runTime = savedMovieEl.querySelector('.runtime').innerText
  // const genre = savedMovieEl.querySelector('.genre').innerText
  // const moviePlot = savedMovieEl.querySelector('.movie-plot').innerText

  //  addDiv.replaceWith(removeDiv)
    //  console.log(id, watchListMovie);

       // myWatchListEl.innerHTML = addMovieToWatchlist(e);