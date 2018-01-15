const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint).
then(blob => blob.json()).
then(data =>cities.push(...data));

function find (word , cities) {
  return cities.filter(city => {

    const regex = new RegExp(word , 'gi');
    return city.city.match(regex) || city.state.match(regex) 
  });
}

function display() {
  console.log(this.value);
  const match = find(this.value, cities);
  const html = match.map(place => {

    const regex = new  RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex , `<span class="hl"> ${this.value}</span>`);
    const statName = place.state.replace(regex , `<span class="hl"> ${this.value}</span>`);
    return `
      <li> la
      <span class="name"> ${cityName}, ${statName} </span>
      <span class="population"> ${place.population} </span>
      </li>
    `;
  }).join(' ');
  console.log(html);
  sugestion.innerHTML=html;
}

 

let input = document.querySelector(".search");
let sugestion = document.querySelector(".suggestions");

input.addEventListener('keydown', display);