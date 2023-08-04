import Section from '@/components/Section';
import { weatherConditions } from '@/lib/constants';
import { ArrowUp } from 'react-feather';
import styles from './CurrentWeather.module.css';

const getWinddirection = angle => {
    if (angle > 345 && angle <= 15) return 'N';
    if (angle > 15 && angle <= 35) return 'N/NE';
    if (angle > 35 && angle <= 55) return 'NE';
    if (angle > 55 && angle <= 75) return 'E/NE';
    if (angle > 75 && angle <= 105) return 'E';
    if (angle > 105 && angle <= 125) return 'E/SE';
    if (angle > 125 && angle <= 145) return 'SE';
    if (angle > 145 && angle <= 165) return 'S/SE';
    if (angle > 165 && angle <= 195) return 'S';
    if (angle > 195 && angle <= 215) return 'S/SW';
    if (angle > 215 && angle <= 235) return 'SW';
    if (angle > 235 && angle <= 255) return 'W/SW';
    if (angle > 255 && angle <= 285) return 'W';
    if (angle > 285 && angle <= 305) return 'W/NW';
    if (angle > 305 && angle <= 325) return 'NW';
    if (angle > 325 && angle <= 345) return 'N/NW';
};

function CurrentWeather({ currentWeather, location, error }) {
    console.log('🚀 -> CurrentWeather -> currentWeather:', currentWeather);
    return (
        <Section>
            {!!error && (
                <p className={styles.error}>
                    Sorry the city you are looking for could not be found
                </p>
            )}
            {!!location && <h2>{location}</h2>}
            {!!currentWeather.temperature && (
                <>
                    <p className={styles.currentTemp}>
                        {currentWeather.temperature}&deg;C
                    </p>
                    <p>
                        <strong>Weather Condition:</strong>{' '}
                        {weatherConditions[currentWeather.weathercode]}
                    </p>
                    <p>
                        <strong>Wind Speed:</strong> {currentWeather.windspeed}
                        km/h
                    </p>
                    <div className={styles.row}>
                        <p>
                            <strong>Wind Direction:</strong>
                        </p>
                        <p>
                            {getWinddirection(currentWeather.winddirection)} (
                            {currentWeather.winddirection}&deg;)
                        </p>
                        <p>
                            <ArrowUp
                                style={{
                                    transform: `rotate(${currentWeather.winddirection}deg)`,
                                }}
                            />
                        </p>
                    </div>
                </>
            )}
        </Section>
    );
}

export default CurrentWeather;
