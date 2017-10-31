import React from 'react';
import SurvivorForm from '../src/components/SurvivorForm';

const handleSubmit = () => {
  return;
}


describe('<SurvivorForm />', () => {
  const wrapper = shallow(<SurvivorForm handleSubmit={handleSubmit} coords={{}}/>);

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have handleSubmit props', () => {
    expect(wrapper.props().handleSubmit).to.not.be.undefined;
  });

  it('should have coords props', () => {
    expect(wrapper.props().coords).to.not.be.undefined;
  });

});
