'use client';

import TextInput from '@/components/TextInput';
import React from 'react';

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
            <TextInput
                placeholder='Harare, Zimbabwe'
                value={city}
                onChange={handleInputChange}
            />
            <button>Check Weather</button>
        </form>
    );
}

export default CityInput;
