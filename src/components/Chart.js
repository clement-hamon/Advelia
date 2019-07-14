import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
// import { Typography } from '@material-ui/core';

export default function Chart(props) {
  const { data, width, height, color} = props;
  return (
    <ResponsiveContainer>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="term" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={color ? color : "#3F51B5"} />
      </BarChart>
    </ResponsiveContainer>
  );
}
