import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaceData } from './api';

import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);
    // we need these to render map at right location and also pass to api call
    const [coordinates, setCoordinates] = useState({ lat: 49, lng: 120 }); 
    const [boundary, setBoundary] = useState(null); 

    // position upon app launch at first time
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //         setCoordinates({ lat: latitude, lng: longitude });
    //     });
    // }, []);

    useEffect(() => {
        console.log(coordinates, boundary)
        getPlaceData().then((data) => {
            setPlaces(data);
        })
    }, [coordinates, boundary]) // add these arguments to make useEffect re-run everytime the map changes

    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
                <Listings />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates} setBoundary={setBoundary} coordinates={coordinates} />
            </Grid>
        </Grid>
        </>
    );
}

export default App;