import Section from '@/components/Section';
import { weatherConditions } from '@/lib/constants';
import dayjs from 'dayjs';
import styles from './ForecastWeather.module.css';

function ForecastWeather({ forecastWeather }) {
    if (Object.keys(forecastWeather).length === 0) return null;
    return (
        <Section>
            <h2>7-day forecast</h2>
            <div className={styles.wrapper}>
                {Array.from({ length: 7 }).map((el, index) => {
                    const date = forecastWeather.time[index];
                    const min = forecastWeather.temperature_2m_min[index];
                    const max = forecastWeather.temperature_2m_max[index];
                    const condition = forecastWeather.weathercode[index];
                    return (
                        <div key={index} className={styles.forecastItem}>
                            <p>
                                <strong>
                                    {dayjs(date).format('ddd D, MMM')}
                                </strong>
                            </p>
                            <p>
                                {max}&deg;C/{min}&deg;C
                            </p>
                            <p>{weatherConditions[condition]}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

export default ForecastWeather;
