import * as types from '../constants/ActionTypes';
import {getSearchCriterion, getRequest} from '../selectors/RequestSelectors';
import urlBuilder from '../utils/urlBuilder';

const changeSearch = (criterion) => ({
    type: types.CHANGE_SEARCH_CRITERION,
    payload: {
      criterion
    }
});

const changeData = (data) => ({
    type: types.CHANGE_DATA,
    payload: {
      data
    }
});

export const changeSearchCriterion = (key, value) => (dispatch, getState) => {
    const searchCriterion = getSearchCriterion(getState());
    const prevSearchCriterion = [...searchCriterion]; // copy to avoid mutation with splice

    const index = searchCriterion.findIndex(c => c.key === key);
    
    if(index > -1){
      prevSearchCriterion.splice(index, 1);
    }
    const newSearchCriterion = [...prevSearchCriterion, {key, value}];
    dispatch(changeSearch( newSearchCriterion ));
    // trigger fetch everytime input change
    fetchData()(dispatch, getState);
};

export const fetchData = () => (dispatch, getState) => {
  const {baseUrl, searchCriterion, countCriteria, sortBy} = getRequest(getState());
  const url = urlBuilder(baseUrl, searchCriterion, countCriteria, sortBy);

  fetch(url).then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    dispatch(changeData(jsonResponse.results))
  });
}