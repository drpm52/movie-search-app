"use strict";
const inputEl = document.querySelector(".search-input-area");
const searchBtn = document.querySelector(".search-btn");

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
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
console.log(typeof inputEl.value);
searchByTitle("inception");
searchBtn.addEventListener("click", 
  (e) => {
    e.preventDefault();
    searchByTitle(inputEl.value);
  }
);
// fetch(`http://www.omdbapi.com/?t=inception&apikey=8149b202`).then(resp=> resp.json().then(data=> console.log(data)))
