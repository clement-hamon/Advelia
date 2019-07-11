import React from 'react';
import { FormControlLabel, RadioGroup, FormLabel, FormControl, Radio } from '@material-ui/core';
import {OUTCOME} from '../constants/ApiNaming';

export default function (props) {
    const { onChange, selected } = props;

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Outcome</FormLabel>
                <RadioGroup
                    aria-label="Outcome"
                    name="Outcome"
                    value={selected}
                    onChange={(e) => onChange(OUTCOME, e.target.value)}
                >
                    <FormControlLabel value="OnGoing" control={<Radio />} label="OnGoing" />
                    <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                    <FormControlLabel value="Died" control={<Radio />} label="Died" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

