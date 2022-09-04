// Do not Share ApI key like this in Your Js file

const apIKey = '3ebda4fa433abb06bc24a3c5681a90a5'
const matricUnit = '&units=metric'

const loadAPI = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apIKey}${matricUnit}`
    const res = await fetch(url)
    const data = await res.json()
    displayAPI(data)
    // console.log(data)

    
}
const displayAPI = data => {
    // const tempertureHolder = document.getElementById("temp-holder-id")
    // tempertureHolder.innerText = data.main.temp

    setInnerTextById('temp-holder-id', data.main.temp)
    setInnerTextById('weather', data.weather[0].main)
    setInnerTextById('precipitation', data.clouds.all)
    setInnerTextById('feels-like', data.main.feels_like)
    setInnerTextById('humidity', data.main.humidity)
    setInnerTextById('pressure', data.main.pressure)
    setInnerTextById('wind-speed', data.wind.speed)
    let sunrise= new Date((data.sys.sunrise +21600)* 1000).toISOString().substring(11, 16)
    let sunset= new Date((data.sys.sunset +21600)* 1000).toISOString().substring(11, 16)
   


    setInnerTextById('sunrise', sunrise)
    setInnerTextById('sunset', sunset)

}

const setInnerTextById= (id, text) => {
    // console.log(data)
    // const weather=document.getElementById("weather").innerText=data.weather[0].main
    const temperature= document.getElementById(id);
    temperature.innerText=text
}


document.getElementById("search-btn-id").addEventListener('click' ,function () { 
    const inputValueElement = document.getElementById("search-input-id")
    const inputValue= inputValueElement.value
    document.getElementById("city-id").innerText=inputValue
    loadAPI(inputValue)
})
// search with enter 
document.getElementById("search-input-id").addEventListener('keyup' ,function (event) {

    if (event.key === 'Enter') {
        const inputValueElement = document.getElementById("search-input-id")
        const inputValue= inputValueElement.value
        const city=document.getElementById("city-id").innerText=inputValue
        loadAPI(inputValue)
    }
})

loadAPI('comilla')
