import React from 'react';
import {
  PieChart, Pie
} from 'recharts';

export default function(props){
    const {data} = props;
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      </PieChart>
    );
}