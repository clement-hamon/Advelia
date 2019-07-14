import React from 'react';
import { Typography, Select, MenuItem  } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    title: {
      verticalAlign: 'bottom'
    }
  });

function InputInline(props){
    const {variant, beforeText, afterText, classes, routeLabel ,selected, onChange, options} = props;
    return (
        <Typography variant={variant}>
        {beforeText} 
        <Select
            value={selected}
            className={classes.title}
            onChange={(e) => onChange(routeLabel, e.target.value)}
            inputProps={{
                name: 'name',
                id: 'species',
            }}
        >
            {options.map((name, i) => (
                <MenuItem key={i} value={name}>{name}</MenuItem>
            ))}
        </Select>
        {afterText}
        </Typography>
    )
}


export default withStyles(styles)(InputInline);