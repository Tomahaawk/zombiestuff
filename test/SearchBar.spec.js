import React from 'react';
import SearchBar from '../src/components/SearchBar';

describe('<SearchBar />', () => {
  const wrapper = shallow(<SearchBar />);

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

});
