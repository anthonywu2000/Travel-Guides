import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = ({ setCoordinates, setBoundary, coordinates }) => {
    const matches = useMediaQuery('(min-width:600px)'); // this is for mobile view adjustments
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
               bootstrapURLKeys = {{ key: "AIzaSyAp5K5I1P-RGF9BYE2ARdhFsg75xlJB1jQ"}}
               defaultCenter = {coordinates}
               center = {coordinates}
               defaultZoom = {16}
               margin = {[50, 50, 50, 50]}
               options = {""}
               onChange = {(e) => {
                console.log(e)
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                setBoundary({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
               }}
               onChildClick = {""}
            > 
               
            </GoogleMapReact>
        </div>
    );
}

export default Map;