import React from 'react';
import {Container, Grid, Button} from '@material-ui/core';

import TopBar from '../components/TopBar';
import Chart from '../components/Chart';
import OutcomeInput from '../components/OutcomeInput';


import {OUTCOME} from '../constants/ApiNaming';

export default function (props){

  function findSearchCriteria(key){
    return props.searchCriterion.find(c => c.key === key);
  }

  const outcome = findSearchCriteria(OUTCOME);
  
  return (
    <div >
      <TopBar/>
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <OutcomeInput outcomeCriteria={outcome ? outcome.value : null} handleChangeSearch={props.changeSearchCriterion.bind(this)}/>
              <Button onClick={props.fetchData}>fetch</Button>
            </Grid>
            <Grid item xs={9}>
              {props.data.length > 0 && 
                <Chart data={props.data} />
              }
            </Grid>
          </Grid>
          
        </Container>
    </div>
  );
}