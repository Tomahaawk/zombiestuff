import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SurvivorEdit from '../src/components/SurvivorEdit';

describe('<SurvivorEdit />', () => {
  const mockState = {
    mapProps: {latitude: 0, longitude: 0, manualChange: false},
    survivorList: {singleSurvivor: {}},
    survivorForm: {error: 'erro', response: null}
  };

  const mockStore = configureStore();
  const store = mockStore(mockState);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <SurvivorEdit />
      </Provider>
    );
  });

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have an EditForm', () => {
    expect(wrapper.find('EditSurvivorForm')).to.have.length(1);
  });
});
