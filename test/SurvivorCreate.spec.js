import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SurvivorCreate from '../src/components/SurvivorCreate';

describe('<SurvivorCreate />', () => {
  const mockState = {
    mapProps: {latitude: 0, longitude: 0, manualChange: false},
    survivorForm: {error: 'erro', response: null},
  }

  const mockStore = configureStore();
  const store = mockStore(mockState);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <SurvivorCreate />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a SurvivorForm', () => {
    expect(wrapper.find('SurvivorForm')).to.have.length(1);
  })
});
