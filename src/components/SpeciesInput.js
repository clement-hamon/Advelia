import React from 'react';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';
import {SPECIES} from '../constants/ApiNaming';

function SpeciesFormCheckBox(props){
    const {species, selected, onChange} = props;
    return (
        <FormControlLabel
        control={
            <Checkbox
                checked={selected === species}
                onChange={(e) => onChange(SPECIES, e.target.value)}
                value={species}
                color="primary"
            />
        }
        label={species}
    />
    )
}

export default function (props) {
    const {onChange, selected} = props;
    return (
        <FormGroup row>
            <SpeciesFormCheckBox species="Cat" selected={selected} onChange={onChange}/>
            <SpeciesFormCheckBox species="Dog" selected={selected} onChange={onChange}/>
        </FormGroup>
    )
}