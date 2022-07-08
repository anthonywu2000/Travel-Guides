import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceInfo = ({ place }) => {

    const classes = useStyles();

    return (
        <Card elevation={8}>
            <CardMedia 
               style={{ height: 500 }} 
               image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdvb2dsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}
               title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value={Number(place?.rating)} precision={0.5} readOnly />
                    <Typography gutterBottom variant="subtitle1">{place?.rating}/5.0</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price Level</Typography>
                    <Typography gutterBottom variant="subtitle1">{place?.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place?.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                   <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                     <img src={award?.images?.small} alt="award-icon" />
                     <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                   </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} /> 
                ))}
                {place?.open_now_text && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <AccessTimeIcon /> {place?.open_now_text}
                    </Typography>
                )}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <LocationOnIcon /> {place?.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place?.phone}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                {place?.reserve_info?.url && (
                    <Button size="small" color="primary" onClick={() => window.open(place?.reserve_info?.url, '_blank')}>
                        Researve here
                    </Button>
                )}
                <Button size="small" color="primary" onClick={() => window.open(place?.website, '_blank')}>
                    Visit Website
                 </Button>
                 <Button size="small" color="primary" onClick={() => window.open(place?.web_url, '_blank')}>
                    Visit Trip Advisor Page
                 </Button>
                 <Button size="small" color="primary" onClick={() => window.open(place?.write_review, '_blank')}>
                    Write a review
                 </Button>
            </CardActions>
        </Card>
    );
}

export default PlaceInfo;