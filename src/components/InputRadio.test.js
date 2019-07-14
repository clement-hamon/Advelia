import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import store from '../store';
import InputRadio from './InputRadio';
import {OUTCOME} from '../constants/ApiNaming';

const InputRadioProvider =
  <Provider store={store}>
    <InputRadio
      selected={null}
      onChange={()=>null}
      title={'Treatment Outcome'}
      labels={['OnGoing', 'Recovered', 'Euthanized', 'Died']}
      routeLabel={OUTCOME}
    />
  </Provider>;

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(InputRadioProvider, container)
  });
  expect(container.querySelectorAll('.inputRadio').length).toBe(1);
});