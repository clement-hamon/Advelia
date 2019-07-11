import React, {Component} from 'react';
import Chart from '../components/Chart';

export default class ChartContainer extends Component{
    componentDidMount(){
      this.props.fetch();
    }

    render(){
      return (<Chart {...this.props}/>)
    }
}