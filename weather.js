window.getWeather = function () {

    let cityName = document.getElementById("cityName").value;


    //8ec1cd18aec637e2b0a0c34aeb0b868c

    let weather_key = '8ec1cd18aec637e2b0a0c34aeb0b868c'

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weather_key}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.getElementById("result").innerHTML = "weather data successfully recieved"
            document.getElementById("temperature").innerHTML = `Temperature in ${response.data.name} '${response.data.sys.country}' is: ${response.data.main.temp}°C`
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.getElementById("result").innerHTML = "Error in fetching data"
        })
}