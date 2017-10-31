import React from 'react';
import CreateSurvivorPage from '../src/components/pages/CreateSurvivorPage';

describe('<CreateSurvivorPage />', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<CreateSurvivorPage />);
    expect(wrapper).to.have.length(1);
  });
});
