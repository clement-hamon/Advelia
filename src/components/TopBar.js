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
  }
});


function TopBar(props) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={props.classes.container}>
        <img className={props.classes.logo} src={advelia} alt="Logo" />
        <Typography variant="h3" color="inherit">
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