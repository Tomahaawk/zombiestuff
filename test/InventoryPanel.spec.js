import React from 'react';
import InventoryPanel from '../src/components/InventoryPanel';

describe('<InventoryPanel />', () => {
  const wrapper = shallow(<InventoryPanel />);

  it('renders the component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have <InventoryPanelItem />', () => {
    expect(wrapper.find('InventoryPanelItem')).to.have.length(1);
  });
});
