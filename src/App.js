import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaceData } from './api';

import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);
    // we need these to render map at right location and also pass to api call
    const [coordinates, setCoordinates] = useState({ lat: 25.0409, lng: 121.5720 }); 
    const [boundary, setBoundary] = useState(null); 

    // position upon app launch at first time (system dependent to make this work)
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //         setCoordinates({ lat: latitude, lng: longitude });
    //     });
    // }, []);

    useEffect(() => {
        console.log(coordinates, boundary)

        getPlaceData(boundary?.ne, boundary?.sw).then((data) => {
            setPlaces(data);
        })
    }, [coordinates, boundary]) // add these arguments to make useEffect re-run everytime the map changes

    console.log(places)

    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
                <Listings places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates} setBoundary={setBoundary} coordinates={coordinates} />
            </Grid>
        </Grid>
        </>
    );
}

export default App;