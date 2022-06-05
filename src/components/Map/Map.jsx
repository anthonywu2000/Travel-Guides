import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = () => {
    const matches = useMediaQuery('(min-width:600px)'); // this is for mobile view adjustments
    const classes = useStyles();
    const coordinates = {
        lat: 0,
        lng: 0
    }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
               bootstrapURLKeys = {{ key: "AIzaSyAp5K5I1P-RGF9BYE2ARdhFsg75xlJB1jQ"}}
               defaultCenter = {coordinates}
               center = {coordinates}
               defaultZoom = {14}
               margin = {[50, 50, 50, 50]}
               options = {""}
               onChange = {""}
               onChildClick = {""}
            > 
               
            </GoogleMapReact>
        </div>
    );
}

export default Map;