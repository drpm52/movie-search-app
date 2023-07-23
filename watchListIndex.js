
const myWatchlist= document.querySelector('.my-watchlist')


myWatchlist.innerHTML += localStorage.getItem("data")
// localStorage.clear()