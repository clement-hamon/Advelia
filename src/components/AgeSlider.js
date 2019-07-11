import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 2,
    label: '2ans',
  },
  {
    value: 4,
    label: '4ans',
  },
  {
    value: 6,
    label: '6ans',
  },
  {
    value: 8,
    label: '8ans',
  },
  {
    value: 10,
    label: '10ans',
  },
];

function valuetext(value) {
  return `${value} year${value > 1 ? 's' : ''}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Minimum Age
      </Typography>
      <Slider
        defaultValue={4}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={2}
        marks={marks}
        min={0}
        max={10}
      />
    </div>
  );
}
