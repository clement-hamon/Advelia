import * as types from '../constants/ActionTypes';

const initialState = {
      baseUrl: 'https://api.fda.gov/animalandveterinary/event.json?',
      searchCriterion: [
        {key: 'outcome.medical_status', value :"Died"},
        {key: 'animal.species', value :"Cat"}
      ],
      countCriteria: "duration.value",
      url: '',
  data: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.CHANGE_SEARCH_CRITERION:
      return {
        ...state, searchCriterion: payload.criterion
      };
    case types.CHANGE_DATA:
      console.log('change request', state.data);
      const copy = [...state.data];
      copy[payload.index] = payload.data;
      return {
        ...state, data: copy
      };
    default:
      return state;
  }
};