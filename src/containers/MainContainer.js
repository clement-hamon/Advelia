import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import TopBar from '../components/TopBar';
import DataAnalysis from '../components/DataAnalysis';

const styles = theme => ({
  container: {
    marginTop: '20px'
  },
  paper: {
    textAlign: 'center',
    padding: '20px 0 40px 0',
  },
  display: {
    minHeight: '400px',
    height: '400px'
  }
});

function MainContainer(props) {

  const { classes } = props;
  console.log('test');
  return (
    <React.Fragment>
      <TopBar />
      <Container className={classes.container}>
          <DataAnalysis {...props} key={0} />
      </Container>
    </React.Fragment>
  );
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContainer);