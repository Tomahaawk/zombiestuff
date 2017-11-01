import React from 'react';
import TradeForm from '../src/components/TradeForm';

const handleSubmit = () => {
  return;
}

describe('<TradeForm />', () => {


  const wrapper = shallow(<TradeForm handleSubmit={handleSubmit} />);

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have handleSubmit props', () => {
    expect(wrapper.props().handleSubmit).to.equal(handleSubmit);
  });

});
