import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default function(props){
    return (
        <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h3" color="inherit">
              Advelia
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              the Adverse Event Listing Application
            </Typography>
          </Toolbar>
        </AppBar>
    )
}