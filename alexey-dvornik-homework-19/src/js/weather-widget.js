import $ from 'jquery';

$.ajax({
    type: "GET",
    url: 'https://api.openweathermap.org/data/2.5/weather',
    data: {
        q: 'Kyiv',
        units: 'metric',
        APPID: '5d066958a60d315387d9492393935c19',
    },
    success: (response) => {
        weatherOutput(response);
    }
})

function weatherOutput (response) {
    const icon = response.weather[0].icon;
    $('.js--city').html(response.name);
    $('.js--temp').html(Math.floor(response.main.temp) + '&deg;');
    $('.js--pressure').html(response.main.pressure);
    $('.js--desc').html(response.weather[0].description);
    $('.js--humidity').html(response.main.humidity + '%');
    $('.js--speed').html(response.wind.speed);
    $('.js--deg').html(response.wind.deg + '&deg;');
    $('.js--icon').attr('src', `https://openweathermap.org/img/w/${icon}.png`);
}
