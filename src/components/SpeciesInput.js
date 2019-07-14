import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { SPECIES, ANIMALS_LIST } from '../constants/ApiNaming';


const styles = theme => ({
    title: {
      verticalAlign: 'bottom'
    }
  });

function SpeciesInput(props) {
    const { onChange, selected, classes } = props;
    return (
        <Select
            value={selected}
            className={classes.title}
            onChange={(e) => onChange(SPECIES, e.target.value)}
            inputProps={{
                name: 'name',
                id: 'species',
            }}
        >
            {ANIMALS_LIST.map((name, i) => (
                <MenuItem value={name}>{name}</MenuItem>
            ))}
        </Select>
    )
}

export default withStyles(styles)(SpeciesInput);