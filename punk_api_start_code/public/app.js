const app = function () {
  const url =  "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";

  const select = document.querySelector('#beer-select');

  makeRequest(url, requestComplete);
};

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  console.log(beers);
  populateList(beers);
};

// const handleSelectChanged = function(beers, index){
//   setPtags(beers, index);
// }

const populateList = function(beers){
  const ul = document.getElementById("beer-list");
  console.log(ul);
  beers.forEach(function(beer){
    const li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);
  });
};

// const setPtags = function(beers, index){
//   const pTag1 = document.querySelector('#country-select-result');
//   pTag1.innerText = "You have selected: " + beers[index].name;
// };


document.addEventListener('DOMContentLoaded', app);
