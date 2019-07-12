import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { OUTCOME, SPECIES } from '../constants/ApiNaming';

import TopBar from '../components/TopBar';
import ChartContainer from './ChartContainer';
import OutcomeInput from '../components/OutcomeInput';
import SpeciesInput from '../components/SpeciesInput';

const styles = theme => ({
  container: {
    marginTop: '50px',
  }
});

function MainContainer(props) {

  function findSearchCriteria(key) {
    return props.searchCriterion.find(c => c.key === key);
  }

  const outcome = findSearchCriteria(OUTCOME);
  const species = findSearchCriteria(SPECIES);

  return (
    <div >
      <TopBar />
      <Container className={props.classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SpeciesInput selected={species ? species.value : null} onChange={props.changeSearchCriterion} />
            <OutcomeInput selected={outcome ? outcome.value : null} onChange={props.changeSearchCriterion} />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper>
                  <ChartContainer fetch={props.fetchData} data={props.data} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContainer);