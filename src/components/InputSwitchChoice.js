import React from 'react';
import { Typography, Grid, Switch, FormControl, FormLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    title: {
        verticalAlign: 'bottom'
    }
});

function InputSwitchChoice(props) {
    const { value, onChange, routeLabel, leftText, rightText, title } = props;
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{title}</FormLabel>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>{leftText}</Grid>
                    <Grid item>
                        <Switch
                            checked={value}
                            onChange={(e) => onChange(routeLabel, e.target.value === 'true' ? true : false)}
                            value={!value}
                        />
                    </Grid>
                    <Grid item>{rightText}</Grid>
                </Grid>
            </Typography>
        </FormControl>)
}

export default withStyles(styles)(InputSwitchChoice);