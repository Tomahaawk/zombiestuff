import React from 'react';
import SurvivorListItem from '../src/components/SurvivorListItem';

const survivors = [{name: '', age: '', infected: '' }];

describe('<SurvivorListItem />', () => {
  const wrapper = mount(<SurvivorListItem survivors={survivors} />);
  it('should have 3 table rows', () => {
    expect(wrapper.find('tr').children()).to.have.length(3);
    expect(wrapper.find('tr').children().find('td')).to.have.length(3);
  });

  it('should have props for survivors', () => {
    expect(wrapper.props().survivors).to.not.be.undefined;
  });
});
