import React from 'react';
import InfectedChart from '../src/components/InfectedChart';

const data = [{}];
const colors = [];
const infected = {description: ''};
const nonInfected = {description: ''};
const roundedAvgInfected = 0;
const roundedAvgNonInfected = 0;

describe('<InfectedChart />', () => {

  const wrapper = mount(
    <InfectedChart
      data={data}
      colors={colors}
      infected={infected}
      nonInfected={nonInfected}
      roundedAvgInfected={roundedAvgInfected}
      roundedAvgNonInfected={roundedAvgNonInfected}
    />
  );

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has a PieChart', () => {
    expect(wrapper.find('PieChart')).to.have.length(1);
  });

  it('has all props', () => {
    expect(wrapper.props().data).to.not.be.undefined;
    expect(wrapper.props().colors).to.not.be.undefined;
    expect(wrapper.props().infected).to.not.be.undefined;
    expect(wrapper.props().nonInfected).to.not.be.undefined;
    expect(wrapper.props().roundedAvgInfected).to.not.be.undefined;
    expect(wrapper.props().roundedAvgNonInfected).to.not.be.undefined;
    expect(wrapper.props().fakeProp).to.be.undefined;

  });
});
