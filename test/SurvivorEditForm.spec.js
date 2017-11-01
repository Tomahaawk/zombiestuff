import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditSurvivorForm from '../src/components/EditSurvivorForm';

const handleSubmit = () => {
  return;
}
const coords = {latitude: 0, longitude: 0};
const manualChange = false;

describe('<EditSurvivorForm />', () => {
  const mockState = {
    survivorList: {singleSurvivor: {lonlat:'POINT (0 0)'}},
  };
  const mockStore = configureStore();
  const store = mockStore(mockState);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <div>
          <EditSurvivorForm handleSubmit={handleSubmit} coords={coords} manualChange={manualChange} />;
        </div>
      </Provider>
    );
  });

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have handleSubmit props', () => {
    expect(wrapper.props().handleSubmit).to.equal(handleSubmit);
  });

  it('should have coords props', () => {
    expect(wrapper.props().coords).to.equal(coords);
  });

  it('should have manualChange props', () => {
    expect(wrapper.props().manualChange).to.equal(manualChange);
  });
});
