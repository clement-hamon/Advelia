import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { OUTCOME, SPECIES } from '../constants/ApiNaming';
import { sortByParam, findByParam } from '../utils'

import TopBar from '../components/TopBar';
import ChartContainer from './ChartContainer';
import OutcomeInput from '../components/OutcomeInput';
import SpeciesInput from '../components/SpeciesInput';

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

  const { classes, data, searchCriterion } = props;

  const outcome = findByParam(searchCriterion, 'key', OUTCOME);
  const species = findByParam(searchCriterion, 'key', SPECIES);

  return (
    <React.Fragment>
      <TopBar />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} sm={12}>
            <Paper className={classes.paper}>
              <OutcomeInput selected={outcome ? outcome.value : null} onChange={props.changeSearchCriterion} />
            </Paper>
          </Grid>
          <Grid item md={9} sm={12}>
            <Paper className={`${classes.paper} ${classes.display}`}>
              <Typography variant="h6">The number of <SpeciesInput selected={species ? species.value : null} onChange={props.changeSearchCriterion} />'s outcome compared to treatment length</Typography>
              <ChartContainer height={400} width={800} fetch={props.fetchData} data={sortByParam(data, 'term')} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContainer);