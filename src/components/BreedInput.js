import React from 'react';

export function BreedInput(props) {
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>No</Grid>
            <Grid item>
                <Switch
                    checked={true}
                    onChange={(e) => console.log(e.target.value)}
                    value="checkedC"
                />
            </Grid>
            <Grid item>Yes</Grid>
        </Grid>
    </Typography>
}