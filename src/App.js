import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaceData } from './api';

import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    // we need these to render map at right location and also pass to api call
    const [coordinates, setCoordinates] = useState({ lat: 25.0409, lng: 121.5720 }); 
    const [boundary, setBoundary] = useState(null); 

    // position upon app launch at first time (system dependent to make this work)
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //         setCoordinates({ lat: latitude, lng: longitude });
    //     });
    // }, []);

    // type of entertainment to show on map
    const [type, setType] = useState('restaurants');
    // get places of specific rating dropdowns
    const [rating, setRating] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place?.rating) > rating);
        console.log(filteredPlaces)
        setFiltered(filteredPlaces);
    }, [rating])

    useEffect(() => {
        console.log(coordinates, boundary)
        // remove empty named and reviewed restaurants
        if (boundary?.sw && boundary?.ne) {
            getPlaceData(type, boundary?.ne, boundary?.sw).then((data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFiltered([]);
            });
        }
    }, [type, boundary]) // add these arguments to make useEffect re-run everytime the map changes

    console.log(places)

    return (
        <>
        <CssBaseline />
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
                <Listings places={filtered?.length ? filtered : places} childCliked={childClicked} type={type} setType={setType} rating={rating} setRating={setRating} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map setCoordinates={setCoordinates} setBoundary={setBoundary} coordinates={coordinates} places={filtered?.length ? filtered : places} setChildClicked={setChildClicked} />
            </Grid>
        </Grid>
        </>
    );
}

export default App;