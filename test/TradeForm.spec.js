import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TradeForm from '../src/components/TradeForm';

const handleSubmit = () => {
  return 'true';
}

describe('<TradeForm />', () => {
  const mockState = {
    form: {tradeForm: {}}
  }
  const mockStore = configureStore();
  const store = mockStore(mockState);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TradeForm handleSubmit={handleSubmit} />
      </Provider>
    );
  });

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have handleSubmit props', () => {
    console.log(wrapper.instance().props);
    expect(wrapper.instance().props.handleSubmit).to.not.be.undefined;
  });
});
