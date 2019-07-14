import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import advelia from '../advelia.png';
import PropTypes from 'prop-types';

const styles = theme => ({
  logo: {
    height: '50px',
  },
  container: {
    grow: 1
  },
  title: {
    marginLeft: '15px'
  }
});


function TopBar(props) {
  const {classes} = props;
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.container}>
        <img className={classes.logo} src={advelia} alt="Logo" />
        <Typography variant="h3" color="inherit" className={classes.title}>
          Advelia
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);