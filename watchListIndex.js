"use strict";



 const myWatchListEl  = document.getElementById("watch-list")
 
let watchListMovies = Object.values(localStorage)
// console.log(watchListMovies);
    let watchListMoviesArray = watchListMovies.map(el => JSON.parse(el))
   
    console.log(watchListMoviesArray);
 let watchListHtml = ""
watchListHtml += watchListMoviesArray.map(data => renderWatchlistHtml(data) )
//  console.log(watchListHtml);
   myWatchListEl.innerHTML = watchListHtml;
   
// console.log(watchListMovieObjects);
// console.log( watchListMovieObjects);
// const movieData = watchListMovieObjects
// console.log(typeof movieData);


 function renderWatchlistHtml(data) {
    let html = `
    <div class = "movie-card row gap-one center">
    <div class="movie-poster row center ">
        <img class ="movie-poster-img" src=${data.poster} alt="poster for ${
      data.title
    }"/>
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
          <button class ="remove-btn" >Remove</button>
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
  
//  console.log(myWatchListEl);

// let watchListMovieIds =localStorage.getItem('data')
// // watchListMovieIds = [watchListMovieIds]
// console.log( watchListMovieIds);
// // myWatchListEl.innerHTML += watchListMovieIds.map(id => {
    
// //  return addMovieToWatchlist(id)
    
// // });




// function renderWatchlistHtml(data) {
//     let html = `
//     <div class = "movie-card row gap-one center">
//     <div class="movie-poster row center ">
//         <img class ="movie-poster-img" src=${data.Poster} alt="poster for ${
//       data.Title
//     }"/>
//     </div>
  
//     <div class = "movie-info-div row col  ">
//        <div class="movie-title-rating-div row  center ">
//           <h3 class ="movie-title">${data.Title}</h3>
//           <img class= "star" src= "./images/star.png" alt="star emoji">
//           <p class= "rating">${data.Ratings[0].Value.slice(0, -3)}</p>
//       </div>
  
//       <div class = "movie-info-text row gap-one" >
//          <p class="runtime">${data.Runtime}</p>
//          <p class="genre">${data.Genre}</p>
  
//          <div class="remove-div">
//          <img class ="remove" src="images/minus-icon-no-bg.png" alt="remove button with minus sign">
//           <button class ="remove-btn" >Remove</button>
//          </div>
//         </div>
//         <div class = "movie-plot-div">
//         <p class="movie-plot">${data.Plot}</p>
  
//       </div>
//       </div>
//     </div>
    
//    `;
//     return html;
//   }
//   async function addMovieToWatchlist(id) {
//     // http://www.omdbapi.com/?i=tt5697572&apikey=8149b202
  
//     try {
//       const promise = await fetch(
//         `http://www.omdbapi.com/?i=${id}&apikey=8149b202`
//       );
//       const data = await promise.json();
//     //  console.log(data);
    
     
//      let watchListMovies = ""
//       watchListMovies =renderWatchlistHtml(data);
//       // myWatchListEl.innerHTML = watchListMovie
//       console.log(watchListMovies);
//       return watchListMovies;
  
//     } catch (error) {
//     //   console.log(error);
//     }}

// console.log(addMovieToWatchlist("tt5697572"));

// // function removeMovieFromWatchlist(movieId){
// // let watchlist =JSON.parse(localStorage.getItem('data')) || []
// // let indexToRemove = watchlist.findIndex(el => el.id === movieId);
// // console.log(indexToRemove);
// // }
//  // const myWatchlist= document.querySelector('.my-watchlist')
// // const data =localStorage.getItem("data")

// // myWatchlist.innerHTML += localStorage.getItem("data")


// // localStorage.clear()
// // document.querySelector('.remove-btn').addEventListener('click', function(e){
// //     let movieId = e.target.closest('.movie-card').id
// //     localStorage.getItem("data.movieId ")

// //     removeMovieFromWatchlist(movieId)


// //  })
// //  console.log(movieIndex);

