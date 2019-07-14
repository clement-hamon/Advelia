import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { OUTCOME, SPECIES, IS_CROSSBRED, ANIMALS_LIST } from '../constants/ApiNaming';
import { sortByParam, findByParam } from '../utils'

import TopBar from '../components/TopBar';
import ChartContainer from './ChartContainer';
import InputRadio from '../components/InputRadio';
import InputInline from '../components/InputInline';
import InputSwitchChoice from '../components/InputSwitchChoice';

const styles = theme => ({
  container: {
    marginTop: '20px'
  },
  paper: {
    textAlign: 'center',
    padding: '20px 0 40px 0',
    marginBottom: '20px'
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
  const isCrossBred = findByParam(searchCriterion, 'key', IS_CROSSBRED);

  return (
    <React.Fragment>
      <TopBar title="Advelia" />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} sm={12}>
            <Paper className={classes.paper}>
              <InputRadio
                selected={outcome ? outcome.value : null}
                onChange={props.changeSearchCriterion}
                title={'Outcome'}
                labels={['OnGoing', 'Recovered', 'Euthanized', 'Died']}
                routeLabel={OUTCOME}
              />
            </Paper>
            <Paper className={classes.paper}>
              <InputSwitchChoice
                leftText="No"
                rightText="Yes"
                title={'Is Crossbred ?'}
                value={isCrossBred ? isCrossBred.value : false}
                onChange={props.changeSearchCriterion}
                routeLabel={IS_CROSSBRED}
               />
            </Paper>
          </Grid>
          <Grid item md={9} sm={12}>
            <Paper className={`${classes.paper} ${classes.display}`}>
              <InputInline
                variant="h6"
                beforeText="The number of "
                afterText="'s outcome compared to treatment length"
                routeLabel={SPECIES}
                options={ANIMALS_LIST}
                selected={species ? species.value : null}
                onChange={props.changeSearchCriterion}
              />
              <ChartContainer
                height={400}
                width={800}
                fetch={props.fetchData}
                data={sortByParam(data, 'term')} />
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