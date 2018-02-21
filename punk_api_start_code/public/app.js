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
  populateList(beers);
  populateDropdown(beers);
};

const handleSelectChanged = function(beers, index){
  setPtags(beers, index);
}

const setPtags = function(beers, index){
  const pTag1 = document.querySelector('#beer-select-result');
  pTag1.innerText = beers[index].name;
  const pTag2 = document.querySelector('#tagline-select-result');
  pTag2.innerText = beers[index].tagline;
  const pTag3 = document.querySelector('#description-select-result');
  pTag3.innerText = beers[index].description;
};

const populateDropdown = function(beers){
  const select = document.getElementById("beer-select");
  beers.forEach(function(beer, index){
    const option = document.createElement('option');
    option.innerText = beer.name;
    option.value = index;
    select.appendChild(option);
  });
  select.addEventListener("change", function(){
    handleSelectChanged(beers, this.value)
  });
};

const populateList = function(beers){
  const dl = document.getElementById("beer-list");
  beers.forEach(function(beer){
    const dt = document.createElement('dl');
    dt.innerText = beer.name;
    const image = document.createElement('img')
    image.src = beer.image_url;
    image.width = '50';
    image.height = '170';
    dl.appendChild(dt);
    dl.appendChild(image);
  });
};

document.addEventListener('DOMContentLoaded', app);
