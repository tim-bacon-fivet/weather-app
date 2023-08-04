'use client';

import CityInput from '@/components/CityInput';
import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/ForecastWeather';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import React from 'react';

export default function Home() {
    const [location, setLocation] = React.useState('');
    const [currentWeather, setCurrentWeather] = React.useState({});
    const [forecastWeather, setForecastWeather] = React.useState({});
    const [error, setError] = React.useState(false);

    const handleCitySearch = async city => {
        if (!city) return;

        const cityResp = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        );
        const json = await cityResp.json();
        console.log('🚀 -> handleCitySearch -> json:', json);

        if (!json.results) {
            console.error('no city found');
            setError(true);
            return;
        }

        const { name, country, longitude, latitude, timezone } =
            json.results[0];

        setLocation(`${name}, ${country}`);

        const weatherResp = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=${timezone}`
        );

        const weatherJson = await weatherResp.json();
        console.log('🚀 -> handleCitySearch -> weatherJson:', weatherJson);

        setCurrentWeather(weatherJson.current_weather);
        setForecastWeather(weatherJson.daily);
    };

    return (
        <MaxWidthContainer>
            <h1>Weather App</h1>
            <CityInput
                onSubmit={handleCitySearch}
                clearError={() => setError(false)}
            />
            <CurrentWeather
                error={error}
                location={location}
                currentWeather={currentWeather}
            />
            <ForecastWeather forecastWeather={forecastWeather} />
        </MaxWidthContainer>
    );
}
