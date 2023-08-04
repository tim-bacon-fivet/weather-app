'use client';

import React from 'react';
import styles from './CityInput.module.css';

function CityInput({ onSubmit, clearError }) {
    const [city, setCity] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(city);
    };

    const handleInputChange = event => {
        setCity(event.target.value);
        clearError();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={styles.searchInput}
                type='text'
                placeholder='Harare'
                value={city}
                onChange={handleInputChange}
            />
            <button className={styles.button}>Check Weather</button>
        </form>
    );
}

export default CityInput;
