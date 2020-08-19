import React from 'react';
import Enzyme,{ shallow,mount } from "enzyme";
import FacultyLogin from "./FacultyLogin";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });




describe("Tests EditCalendar",()=>{
    test("renders",()=>{
        const wrapper=shallow(<FacultyLogin/>);
        expect(wrapper.exists()).toBe(true);
    })
    it('should have a <form> element', () => {
        const wrapper3=shallow(<FacultyLogin/>);
        expect(
          wrapper3.find('form').length
        ).toBe(1);
      });
    it('1 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<FacultyLogin/>);
        expect(
          wrapper4.find('form').childAt(3).props().type
        ).toBe('text');
    });
    it('1 `<input>` element should have a placeholder attribute with value `FIDVal`', () => {
        const wrapper5=shallow(<FacultyLogin/>);
        expect(
          wrapper5.find('form').childAt(3).props().placeholder//throws error for now
        ).toBe('FIDVal');
      });
      it('2 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<FacultyLogin/>);
        expect(
          wrapper4.find('form').childAt(5).props().type
        ).toBe('text');
    });
    it('2 `<input>` element should have a placeholder attribute with value `PasswordVal`', () => {
        const wrapper5=shallow(<FacultyLogin/>);
        expect(
          wrapper5.find('form').childAt(5).props().placeholder//throws error for now
        ).toBe('PasswordVal');
      });
    it('calls onSubmit prop function when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper2 = shallow(<FacultyLogin onSubmit={onSubmitFn}/>);
        wrapper2.find('form').simulate('submit');
        expect(onSubmitFn).toBeCalled();
      });
      it('`<input>` element should have an onChange attribute', () => {
        const wrapper=shallow(<FacultyLogin/>);
        expect(
          wrapper.find('form').childAt(3).props().onChange
        ).toBeDefined();
      });
  
      it('onChange attribute should be of type `function`', () => {
        const wrapper=shallow(<FacultyLogin/>);
        expect(
          typeof wrapper.find('form').childAt(3).props().onChange === 'function'
        ).toBe(true);
      });
      
})