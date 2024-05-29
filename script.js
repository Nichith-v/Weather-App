const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a86384ff7fmshed84a3f5618a279p11a51ejsnb38f1f74402a',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


let currCity = 'Delhi';
window.addEventListener("load" ,()=> getResults(currCity));

async function getResults (query){
    try{
        const response = await fetch(`${url}${query}`, options);
        const result = await response.json();
        console.log(result);
        displayResults(result)
    }catch(error){
        console.log(error);
    }
}

function displayResults (weather) {
    let city = document.querySelector('#city');
    city.innerText = `${currCity}`;
  
    let now = new Date();
    let date = document.querySelector('#date');
    date.innerText = gettingDate(now);
  
    let temp = document.querySelector('#temperature');
    temp.innerHTML = `${Math.round(weather.temp)}<span>°c</span>`;
    
    let humidity = document.querySelector('#humidity');
    humidity.innerHTML = `${weather.humidity}`;
    
    let windspeed = document.querySelector('#wind-speed');
    windspeed.innerHTML = `${weather.wind_speed}`;


    let min = document.querySelector('#min-temp');
    min.innerText = `${Math.round(weather.min_temp)}`;

    let max = document.querySelector('#max-temp');
    max.innerText = `${Math.round(weather.max_temp)}`;
  }




function gettingDate (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }


const searchBtn = document.getElementById('input-btn');
const searchText = document.getElementById('input-text');

searchBtn.addEventListener('click', ()=>{
    currCity = searchText.value;
    if(!currCity){
        return;
    }
    getResults(currCity);
    searchText.value = '';
})
