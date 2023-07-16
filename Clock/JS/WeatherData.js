function getCurrentLoc() {
     navigator.geolocation.getCurrentPosition(getWeather, failedToGet);
}
function getWeather(location) {
     const lat = location.coords.latitude;
     const lon = location.coords.longitude;
     let url = `http://api.weatherapi.com/v1/current.json?key=d75c11fdb2434f08a3033240231607&q=${lat},${lon}&aqi=yes`
     fetch(url,{method: 'GET'})
     .then((res) => res.json())
     .then((data)=>{
          document.getElementsByTagName('p')[3].innerText = `${data.current.feelslike_c} °c`;
          document.getElementsByTagName('p')[4].innerText = data.current.condition.text;
     })
}
function failedToGet() {
     console.error("Failed to get Location");
}
getCurrentLoc()