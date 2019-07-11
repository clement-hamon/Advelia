import React, {Component} from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function Chart(props) {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="term" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

export default class ChartContainer extends Component{
    componentDidMount(){
      this.props.fetch();
    }

    render(){
      return (<Chart {...this.props}/>)
    }
}
