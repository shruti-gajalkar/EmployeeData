import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
import ListEmployee from '../ListEmployee.jsx';
import CreateEmployeeComponent from '../CreateEmployeeComponent'
import HeaderComponent from '../HeaderComponent.js';


it('renders correctly enzyme', () => {
    const wrapper = shallow(<ListEmployee />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly CreateEmployeeComponent enzyme', () => {
    const wrapper = shallow(<CreateEmployeeComponent />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly HeaderComponent enzyme', () => {
    const wrapper = shallow(<HeaderComponent />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('the default value for  fields should be empty', () => {
    const wrapper = shallow(<CreateEmployeeComponent />);
    expect(wrapper.find('input[name="emailId"]').exists()).toBe(true);
  });
  it('the default value for  fields should be empty', () => {
    const wrapper = shallow(<CreateEmployeeComponent />);
    expect(wrapper.find('input[name="lastName"]').exists()).toBe(true);
  });
  it('the default value for  fields should be empty', () => {
    const wrapper = shallow(<CreateEmployeeComponent />);
    expect(wrapper.find('input[name="firstName"]').exists()).toBe(true);
  });

