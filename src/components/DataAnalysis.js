import React from 'react';
import ChartContainer from '../containers/ChartContainer';
import OutcomeInput from '../components/OutcomeInput';
import SpeciesInput from '../components/SpeciesInput';
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import { OUTCOME, SPECIES } from '../constants/ApiNaming';
import { sortByParam, findByParam } from '../utils';

export default class DataAnalysis extends React.Component{
    componentDidMount(){
      this.props.fetchData(0);
    }

    render(){
        const {classes, changeSearchCriterion, searchCriterion, fetchData} = this.props;

        const outcome = findByParam(searchCriterion, 'key', OUTCOME);
        const species = findByParam(searchCriterion, 'key', SPECIES);

        return (
            <Container className={classes.container}>
            <Grid container spacing={3}>
            <Grid item md={3} sm={12}>
                <Paper className={classes.paper}>
                <OutcomeInput selected={outcome ? outcome.value : null} onChange={changeSearchCriterion} />
                </Paper>
            </Grid>
            <Grid item md={9} sm={12}>
                <Paper className={`${classes.paper} ${classes.display}`}>
                <Typography variant="h6">The number of <SpeciesInput selected={species ? species.value : null} onChange={changeSearchCriterion} />'s outcome compared to treatment length</Typography>
                {this.props.data[0] && this.props.data[0].length > 0&&
                <ChartContainer height={400} width={800} fetch={fetchData} data={sortByParam(this.props.data[0], 'term')} />
                }
                </Paper>
            </Grid>
            </Grid>
            </Container>
        )
}
}