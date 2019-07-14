import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

import DisplayChart from '../components/DisplayChart';

export default class ChartContainer extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.data.length > 0) {
      return (<DisplayChart {...this.props} />)
    } else {
      return (<CircularProgress />)
    }
  }
}