import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceInfo from "../PlaceInfo/PlaceInfo";

import useStyles from './styles';

const Listings = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        { name: "Warsaw Philharmonic" },
        { name: "TCU Hall Texas" },
        { name: "White House USA" },
        { name: "Warsaw Philharmonic" },
        { name: "TCU Hall Texas" },
        { name: "White House USA" },
        { name: "Warsaw Philharmonic" },
        { name: "TCU Hall Texas" },
        { name: "White House USA" }
    ];


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
                    <MenuItem value="above3">above 3.0</MenuItem>
                    <MenuItem value="above4">above 4.0</MenuItem>
                    <MenuItem value="above4.5">above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={2} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item xs={10}>
                        <PlaceInfo place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Listings;