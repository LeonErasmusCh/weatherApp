import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';

const api = {
  key: "8d0c68f01e14bee020d473eb3ab58157",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const search = (evt) => {
    if (evt.key === "Enter" || evt.key === "Done") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setWeather(result)
          setQuery("")
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    
    <div className={(typeof weather.main === "undefined" && loading === false) ? "defaultImg" : "" }>

    <div className={(typeof weather.main !== "undefined") ? 
    ((weather.weather[0].main === "Clouds") ? "cloudy" 
    : (weather.weather[0].main === "Clear") ? "warm" 
    : (weather.weather[0].main === "Rainy") ? "rain" 
    : (weather.weather[0].main === "Snow") ? "cold" 
    : (weather.weather[0].main === "Mist") ? "misty" 
    : (weather.weather[0].main === "Drizzle") ? "drizzle" 
    : "") 
    
    : "app"}>



      <div className="App">
        <main >

          <div>
            <input
              //className="form-control form-control-sm"
              className="col-8 m-auto input"
              type="text" placeholder="Please enter city..."
              aria-label=".form-control-sm example"
              onChange={e => setQuery(e.target.value)}
              onKeyPress={search}
              value={query}
            />
          </div>
          {(typeof weather.main !== "undefined") ? (
            <>
              <div className='container col-10 col-md-6  center-info'>
                <div className='row'>
                  <div className='m-auto'>
                    <h5 className='country'>{weather.name} , {weather.sys.country}</h5>
                    <h4 className='date mb-4'>{dateBuilder(new Date())}</h4>
                    <h5 className='weather mt-4'>{weather.weather[0].main}</h5>
                    {(weather.weather[0].main === "Clear") ? <i class="fas fa-sun mt-2 icon" style={{"color":"#F0BC68"}}></i> : ("")}
                    {(weather.weather[0].main === "Clouds") ? <i class="fas fa-cloud mt-2 icon" style={{"color":"#F2F2F2"}}></i> : ("")}
                    {(weather.weather[0].main === "Snow") ? <i class="fas fa-snowflake mt-2 icon" style={{"color":"#FFF"}}></i> : ("")}
                    {(weather.weather[0].main === "Rain") ? <i class="fas fa-cloud-rain mt-2 icon " style={{"color":"#B8C6D9"}}></i> : ("")}
                    {(weather.weather[0].main === "Mist") ? <i class="fas fa-smog mt-2 icon" style={{"color":"#F2F2F2"}}></i> : ("")}
                    <h4 className='temperature mt-4'>{Math.round(weather.main.temp)}<span style={{ "fontSize": "0.7em" }}>??</span>c</h4>
                    
                    
                    <div className='row'>
                      <p className='col-2 bottom-info'></p>
                      <p className='col-4 bottom-info'>min {Math.round(weather.main.temp_min)} <span style={{ "fontSize": "0.7em" }}>??</span>c</p>
                      <p className='col-4 bottom-info'>max {Math.round(weather.main.temp_max)} <span style={{ "fontSize": "0.7em" }}>??</span>c</p>
                      <p className='col-2 bottom-info'></p>
                    </div>
                  

                  </div>
                </div>
              </div>

{/* 
              <div className='container-fluid'>
                <div className='row bottom-placement'>
                  <div class="card-group">

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Mon</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Tue</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Wed</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Thur</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Fri</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Sat</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>

                    <div className="card card-color" >
                      <div className="card-body">
                        <h5 className="card-title">Sun</h5>
                        <p className="card-text">15c</p>
                        <i class="fas fa-sun icon"></i>
                        <p className="card-text"><small className="text-muted">Rainy</small></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
*/}

            </>


          ) : (
            <div className='container col-10 col-md-6 welcome'>
              <div className='row'>
                <div className='m-auto'>
                  {(loading === true) ? <Loading /> 
                  :  <h4 className=' display-4'>Welcome to <span className='weatherWelcome'>WeatherApp</span> </h4>}
                </div>
              </div>
            </div>
          )}


        </main>
      </div>
    </div>
    </div>
    
  );
}



export default App;
