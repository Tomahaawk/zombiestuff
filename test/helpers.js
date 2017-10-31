import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import { sinon, spy } from 'sinon';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.sinon = sinon;
global.spy = spy;
global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
