import { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = '34976cd487064bd634c1f95dd97a1b81';
  const UNITS = 'metric';
  const URL_STD = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${UNITS}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(URL_STD).then(response => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  const currentLocation = () => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const URL_WLL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${API_KEY}`;
        
        axios.get(URL_WLL).then(response => {
          setData(response.data);
          console.log(response.data);
        })
      })
    }
  }

  useEffect(() => {
    currentLocation();
  }, [])

  return (
    <div className={styles.weather}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search..."
          onChange={e => setLocation(e.target.value)}
          value={location}
          onKeyPress={searchLocation}
        />
      </div>
      <div className={styles.top}>
        <div className={styles.location}>
          <h2>{data.name}</h2>
        </div>
        <div className={styles.temperature}>
          {data.main ? <h2>{Math.round(data.main.temp)}°C</h2> : 0}
        </div>
        <div className={styles.description}>
          {data.weather ? <h3>{data.weather[0].main}</h3> : null}
        </div>
      </div>
      {data.name != undefined &&
        <div className={styles.bottom}>
          <div className={styles.feels}>
            {data.main ? <p>{Math.round(data.main.feels_like)}°C</p> : 0}
            <p>Feels like</p>
          </div>
          <div className={styles.humidity}>
            {data.main ? <p>{data.main.humidity}%</p> : 0}
            <p>Humidity</p>
          </div>
          <div className={styles.wind}>
            {data.wind ? <p>{data.wind.speed}km/h</p> : 0}
            <p>Wind</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Weather;