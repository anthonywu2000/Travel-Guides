import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceInfo from "../PlaceInfo/PlaceInfo";

import useStyles from './styles';

const Listings = ({ places, type, setType, rating, setRating, cuisine, setCuisine }) => { /*childClicked*/
    const classes = useStyles();
    
    // console.log({ childClicked });

    // const [elRefs, setElRefs] = useState([]);

    // useEffect(() => {
    //     const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())
    //     setElRefs(refs);
    // }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h5">What's around you?</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="type">Type</InputLabel>
                <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">restaurants</MenuItem>
                    <MenuItem value="hotels">hotels</MenuItem>
                    <MenuItem value="attractions">attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="rating">Rating</InputLabel>
                <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="all">all</MenuItem>
                    <MenuItem value="3">above 3.0</MenuItem>
                    <MenuItem value="4">above 4.0</MenuItem>
                    <MenuItem value="4.5">above 4.5</MenuItem>
                </Select>
            </FormControl>

            {/* <FormControl className={classes.formControl} disabled={type==="restaurants" ? false : true}>
                <InputLabel id="cuisine">Cuisine</InputLabel>
                <Select id="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                    <MenuItem value="all">all</MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Japanese">Japanese</MenuItem>
                    <MenuItem value="Italian">Italian</MenuItem>
                    <MenuItem value="Asian">Asian</MenuItem>
                    <MenuItem value="Vegan Options">Vegan Options</MenuItem>
                    <MenuItem value="Vegetarian Friendly">Vegetarian Friendly</MenuItem>
                </Select>
            </FormControl> */}
            
            <Grid container spacing={2} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item xs={10} key={i}>
                        <PlaceInfo place={place} /*selected={Number(childClicked) === i} refProp={elRefs[i]}*/ />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Listings;