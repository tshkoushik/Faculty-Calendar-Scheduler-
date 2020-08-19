import React from 'react';
import Enzyme,{ shallow,mount } from "enzyme";
import AdminLogin from "./AdminLogin";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });




describe("Tests EditCalendar",()=>{
    test("renders",()=>{
        const wrapper=shallow(<AdminLogin/>);
        expect(wrapper.exists()).toBe(true);
    })
    it('should have a <form> element', () => {
        const wrapper3=shallow(<AdminLogin/>);
        expect(
          wrapper3.find('form').length
        ).toBe(1);
      });
    it('1 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<AdminLogin/>);
        expect(
          wrapper4.find('form').childAt(3).props().type
        ).toBe('text');
    });
    it('1 `<input>` element should have a placeholder attribute with value `AIDVal`', () => {
        const wrapper5=shallow(<AdminLogin/>);
        expect(
          wrapper5.find('form').childAt(10).placeholder//throws error for now
        ).toBe('AIDVal');
      });
      it('2 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<AdminLogin/>);
        expect(
          wrapper4.find('form').childAt(5).props().type
        ).toBe('text');
    });
    it('2 `<input>` element should have a placeholder attribute with value `PasswordVal`', () => {
        const wrapper5=shallow(<AdminLogin/>);
        expect(
          wrapper5.find('form').childAt(5).props().placeholder//throws error for now
        ).toBe('PasswordVal');
      });
    it('calls onSubmit prop function when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper2 = shallow(<AdminLogin onSubmit={onSubmitFn}/>);
        wrapper2.find('form').simulate('submit');
        expect(onSubmitFn).toBeCalled();
      });
      it('`<input>` element should have an onChange attribute', () => {
        const wrapper=shallow(<AdminLogin/>);
        expect(
          wrapper.find('form').childAt(3).props().onChange
        ).toBeDefined();
      });
  
      it('onChange attribute should be of type `function`', () => {
        const wrapper=shallow(<AdminLogin/>);
        expect(
          typeof wrapper.find('form').childAt(3).props().onChange === 'function'
        ).toBe(true);
      });
      
})