import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = ({ setCoordinates, setBoundary, coordinates, places, setChildClicked }) => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
               bootstrapURLKeys = {{ key: "AIzaSyAp5K5I1P-RGF9BYE2ARdhFsg75xlJB1jQ"}}
               defaultCenter = {coordinates}
               center = {coordinates}
               defaultZoom = {15}
               margin = {[50, 50, 50, 50]}
               options = {""}
               onChange = {(e) => {
                 console.log(e)
                 setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                 setBoundary({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
               }}
               onChildClick = {(child) => setChildClicked(child)}
            > 
               {places?.map((place, i) => (place?.name && (
                  <div 
                     className={classes.markerContainer}
                     lat={Number(place.latitude)}
                     lng={Number(place.longitude)}
                     key={i}
                   >
                    <Paper className={classes.paper} elevation={8}>
                        <Typography gutterBottom variant="subtitle2">{place.name}</Typography>
                        <img className={classes.pointer} src={place.photo ? 
                            place.photo.images.large.url : 
                            'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdvb2dsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'} 
                            alt="place_image" 
                        />
                        <Rating size="small" value={Number(place?.rating)} precision={0.5} readOnly /> 
                    </Paper>
                   </div>
               )))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;