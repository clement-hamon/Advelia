import MainContainer from './containers/MainContainer'
import { connect } from 'react-redux';

import { changeSearchCriterion, fetchData } from './actions/RequestActions';
import {
  getSearchCriterion, getData
} from "./selectors/RequestSelectors";

const mapStateToProps = state => ({
  searchCriterion: getSearchCriterion(state),
  data: getData(state)
});

export default connect(mapStateToProps, {
  changeSearchCriterion,
  fetchData
})(MainContainer);