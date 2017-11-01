import React from 'react';
import SurvivorForm from '../src/components/SurvivorForm';

const handleSubmit = () => {
  return;
}
const coords = {latitude: 0, longitude: 0};

describe('<SurvivorForm />', () => {
  const wrapper = shallow(<SurvivorForm handleSubmit={handleSubmit} coords={coords} />);

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have handleSubmit props', () => {
    expect(wrapper.props().handleSubmit).to.equal(handleSubmit);
  });

  it('should have coords props', () => {
    expect(wrapper.props().coords).to.equal(coords);
  });

});
