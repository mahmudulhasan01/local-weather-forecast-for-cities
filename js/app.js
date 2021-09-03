
const API_key = 'b807177b97e3047b9e0b3843728d9ebf';

const scearchTemperature = () => {
    const searchText = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
};

const displayTemperature = (data) => {
    // set wethwr icon 
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const wethertIcon = document.getElementById('weather-icon');
    wethertIcon.setAttribute('src', url);
    //   city name 
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    // temperature 
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    // // weatherFeel 
    const weatherFeel = document.getElementById('weatherFeel');
    weatherFeel.innerText = data.weather[0].weatherFeel;
};