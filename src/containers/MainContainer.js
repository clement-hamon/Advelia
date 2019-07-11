import React from 'react';
import { Container, Grid, Button} from '@material-ui/core';
import { OUTCOME, SPECIES } from '../constants/ApiNaming';

import TopBar from '../components/TopBar';
import ChartContainer from './ChartContainer';
import OutcomeInput from '../components/OutcomeInput';
import SpeciesInput from '../components/SpeciesInput';

export default function (props) {

  function findSearchCriteria(key) {
    return props.searchCriterion.find(c => c.key === key);
  }

  const outcome = findSearchCriteria(OUTCOME);
  const species = findSearchCriteria(SPECIES);

  return (
    <div >
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SpeciesInput selected={species ? species.value : null} onChange={props.changeSearchCriterion}/>
            <OutcomeInput selected={outcome ? outcome.value : null} onChange={props.changeSearchCriterion} />
            <Button variant="contained" onClick={props.fetchData}>Fetch</Button>
          </Grid>
          <Grid item xs={9}>
              <ChartContainer fetch={props.fetchData} data={props.data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}