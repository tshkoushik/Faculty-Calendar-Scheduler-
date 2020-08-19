import React from 'react';
import Enzyme,{ shallow,mount } from "enzyme";
import PopulateTimeTable from "./PopulateTimeTable";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("Tests EditTimeTable",()=>{
    test("renders",()=>{
        const wrapper=shallow(<PopulateTimeTable/>);
        expect(wrapper.exists()).toBe(true);
    })
    it('should have a <form> element', () => {
        const wrapper3=shallow(<PopulateTimeTable/>);
        expect(
          wrapper3.find('form').length
        ).toBe(1);
      });
    it('1 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(3).props().type
        ).toBe('text');
    });
    it('1 `<input>` element should have a placeholder attribute with value  FIDVal', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(3).props().placeholder//throws error for now
        ).toBe('FIDVal');
      });
      it('2 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(4).props().type
        ).toBe('text');
    });
    it('2 `<input>` element should have a placeholder attribute with value DayVal', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(4).props().placeholder//throws error for now
        ).toBe('DayVal');
      });
      it('3 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(5).props().type
        ).toBe('text');
    });
    it('3 `<input>` element should have a placeholder attribute with value `HourVal`', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(5).props().placeholder//throws error for now
        ).toBe('HourVal');
      });
      it('4 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(6).props().type
        ).toBe('text');
    });
    it('4 `<input>` element should have a placeholder attribute with value `SubjectVal`', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(6).props().placeholder//throws error for now
        ).toBe('SubjectVal');
      });
      it('5 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(7).props().type
        ).toBe('text');
    });
    it('5 `<input>` element should have a placeholder attribute with value SubjectNameVal', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(7).props().placeholder//throws error for now
        ).toBe('SubjectNameVal');
      });
      it('6 <input> element should be of type `text`', () => {
        const wrapper4=shallow(<PopulateTimeTable/>);
        expect(
          wrapper4.find('form').childAt(8).props().type
        ).toBe('text');
    });
    it('6 `<input>` element should have a placeholder attribute with value `LocationVal`', () => {
        const wrapper5=shallow(<PopulateTimeTable/>);
        expect(
          wrapper5.find('form').childAt(8).props().placeholder//throws error for now
        ).toBe('LocationVal');
      });
    it('calls onSubmit prop function when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper2 = shallow(<PopulateTimeTable onSubmit={onSubmitFn}/>);
        wrapper2.find('form').simulate('submit');
        expect(onSubmitFn).toBeCalled();
      });
      it('`<input>` element should have an onChange attribute', () => {
        const wrapper=shallow(<PopulateTimeTable/>);
        expect(
          wrapper.find('form').childAt(3).props().onChange
        ).toBeDefined();
      });

      it('onChange attribute should be of type `function`', () => {
        const wrapper=shallow(<PopulateTimeTable/>);
        expect(
          typeof wrapper.find('form').childAt(3).props().onChange === 'function'
        ).toBe(true);
      });

})

