import React from 'react';
import TopMenu from '../src/components/TopMenu';

describe('<TopMenu />', () => {

  const wrapper = shallow(<TopMenu />);

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has 4 buttons', () => {
    expect(wrapper.find('button')).to.have.length(4);
  });

});
