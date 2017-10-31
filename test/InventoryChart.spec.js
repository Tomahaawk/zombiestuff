import React from 'react';
import InventoryChart from '../src/components/InventoryChart';

const data = [{}];
const inventory = { description: '' };
const infectedPoints = 0;
const roundedAvgHeatlhy = 0;
const roundedAvgPerson = 0;

describe('<InventoryChart />', () => {

  const wrapper = mount(
    <InventoryChart
      data={data}
      inventory={inventory}
      infectedPoints={infectedPoints}
      roundedAvgHeatlhy={roundedAvgHeatlhy}
      roundedAvgPerson={roundedAvgPerson}
    />
  );

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has a BarChart', () => {
    expect(wrapper.find('BarChart')).to.have.length(1);
  });

  it('has all props', () => {
    expect(wrapper.props().data).to.not.be.undefined;
    expect(wrapper.props().inventory).to.not.be.undefined;
    expect(wrapper.props().infectedPoints).to.not.be.undefined;
    expect(wrapper.props().roundedAvgHeatlhy).to.not.be.undefined;
    expect(wrapper.props().roundedAvgPerson).to.not.be.undefined;

    expect(wrapper.props().fakeProp).to.be.undefined;
  })
});
