
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ backgroundColor: "green"}}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title} style={{ fontWeight: 800 }}>
                    TRAVEL GUIDE
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title} style={{ fontWeight: 500 }}>
                        Search to explore!
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;