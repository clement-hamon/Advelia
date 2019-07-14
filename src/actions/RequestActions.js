import * as types from '../constants/ActionTypes';
import {getSearchCriterion, getRequest} from '../selectors/RequestSelectors';
import urlBuilder from '../utils/urlBuilder';

const changeSearch = (criterion) => ({
    type: types.CHANGE_SEARCH_CRITERION,
    payload: {
      criterion
    }
});

const changeData = (index, data) => ({
    type: types.CHANGE_DATA,
    payload: {
      index,
      data
    }
});

export const changeSearchCriterion = (key, value) => (dispatch, getState) => {
    const searchCriterion = getSearchCriterion(getState());
    const prevSearchCriterion = [...searchCriterion]; // copy to avoid mutation with splice

    const index = searchCriterion.findIndex(c => c.key === key);
    
    if(index > -1){
      prevSearchCriterion.splice(index, index + 1);
    }
  
    dispatch(changeSearch( [...prevSearchCriterion, {key, value}] ));
    // trigger fetch everytime input change
    fetchData(0)(dispatch, getState);
};

export const fetchData = (index) => (dispatch, getState) => {
  const {baseUrl, searchCriterion, countCriteria, sortBy} = getRequest(getState());
  const url = urlBuilder(baseUrl, searchCriterion, countCriteria, sortBy);
  console.log(url);
  fetch(url).then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    dispatch(changeData(index, jsonResponse.results))
  });
}