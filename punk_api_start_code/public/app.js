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
  const dl = document.getElementById("beer-list");
  beers.forEach(function(beer){
    const dt = document.createElement('dl');
    dt.innerText = beer.name;
    const dd = document.createElement('dl')
    const image = document.createElement('img')
    image.src = beer.image_url;
    // dd.innerText = beer.image_url;
    console.log(beer);
    dl.appendChild(dt);
    dl.appendChild(dd);
    dl.appendChild(image);
  });
};

// const createImg = function(url){
//   const img = document.createElement('img');
//   img.src = url;
// }

// const setPtags = function(beers, index){
//   const pTag1 = document.querySelector('#country-select-result');
//   pTag1.innerText = "You have selected: " + beers[index].name;
// };


document.addEventListener('DOMContentLoaded', app);
