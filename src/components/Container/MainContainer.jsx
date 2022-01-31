import React from 'react';
import ErrorContainer from './ErrorContainer';
import WeatherContainer from './WeatherContainer';

function MainContainer({weather}) {
    return (
        <div className='container'>
        {weather.location? <WeatherContainer/> : <ErrorContainer/>}
        </div>
    );
}

export default MainContainer;
