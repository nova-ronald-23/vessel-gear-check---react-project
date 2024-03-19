import React, { useEffect, useState } from "react";
import './test2.css'

import cloud_icon from '../Assets/cloud.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';
import locator_icon from '../Assets/locator.png';
import ship_icon from '../Assets/ship.png';

const WeatherApp = () => {
    const api_key = "4d4f689d9c7293aa4b580d2c231f2849";
    const [location, setLocation] = useState("");
    const [temperature, setTemperature] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [country, setCountry] = useState("");
    const [humidity, setHumidity] = useState("");
    const [time, setTime] = useState(""); // State to hold current time
    const [dateInfo, setDateInfo] = useState("");

    const fetchWeatherData = async (latitude, longitude, setLoc, setTemp, setWind, setCountry, setHumidity) => {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;

        try {
            let response = await fetch(weatherUrl);
            let data = await response.json();
            setTemp(`${data.main.temp}°C`);
            setWind(`${data.wind.speed} km/hr`);
            setHumidity(`${data.main.humidity}%`);
            setLoc(data.name);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }

        let countryUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        try {
            let response = await fetch(countryUrl);
            let data = await response.json();
            setCountry(data.countryName);
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    }

    const getCurrentDateInfo = () => {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // Include seconds
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        setDateInfo(formattedDate);
    }

    const getCurrentTime = () => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString('en-US');
        setTime(formattedTime);
    }

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude, setLocation, setTemperature, setWindSpeed, setCountry, setHumidity);
                getCurrentDateInfo();
                getCurrentTime(); // Call getCurrentTime here to set initial time
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    }

    useEffect(() => {
        getLocation();
        // Update time every second
        const intervalId = setInterval(() => {
            getCurrentTime();
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            </head>
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>

            <div className="container">
                <div className='container1'>
                    <div className="cont1">
                        <div className="weather-image1">
                            <img src={cloud_icon} alt="" />
                        </div>
                        <div className="weather-temp">{temperature}</div>
                        <div className="weather-location1"><text>{location}</text></div>
                        <div className="data-container">
                            <div className="element">
                                <img src={humidity_icon} alt="" className="icon" />
                                <div className="data">
                                    <div className="humidity-percent">{humidity}</div>
                                    <div className="text">Humidity</div>
                                </div>
                            </div>
                            <div className="element">
                                <img src={wind_icon} alt="" className="icon" />
                                <div className="data">
                                    <div className="wind-rate">{windSpeed}</div>
                                    <div className="text">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Second Container */}
                <div className='container2'>
                    <div className="cont2">
                        <div className="weather-image2">
                            <img src={locator_icon} alt="" />
                        </div>
                        <div className="weather-location2">{location}, {country}</div>
                        <div className="data-container">
                        </div>
                    </div>
                </div>

                {/* Third Container */}
                <div className='container3'>
                    <div className="weather-image3">
                        <img src={ship_icon} alt="" />
                    </div>
                    <div className="date-info"><p>{dateInfo}</p><break></break><p className="time">{time}</p></div> {/* Display date and time */}
                </div>
            </div>
            <div className="container4">


                <div className="symbol1"><span class="material-symbols-outlined">
                    arrow_forward_ios
                </span></div><div className="symbol2">  <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span> <div className="button1"><text>Get Started</text></div></div>


            </div>
        </>
    );
}

export default WeatherApp;
