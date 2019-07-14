import React from 'react';
import { FormControlLabel, RadioGroup, FormLabel, FormControl, Radio } from '@material-ui/core';

export default function (props) {
    const { onChange, selected, title, labels, routeLabel } = props;

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">{title}</FormLabel>
                <RadioGroup
                    aria-label={title}
                    name={title}
                    value={selected}
                    onChange={(e) => onChange(routeLabel, e.target.value)}
                >
                    {labels.map((label, i) => (
                        <FormControlLabel key={i} value={label} control={<Radio />} label={label} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

