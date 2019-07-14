import React, {Component} from 'react';
import { CircularProgress } from '@material-ui/core';

import Chart from '../components/Chart';

export default class ChartContainer extends Component{
    componentDidMount(){
      this.props.fetch(0);
    }

    render(){
      console.log(this.props.data);
      if(this.props.data.length > 0){
        return (<Chart {...this.props}/>)
      } else {
        return (<CircularProgress />)
      }
    }
}