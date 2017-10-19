import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';

import Calculator from './index';

chai.use(chaiEnzyme());

describe('<Calculator />', () => {
  const wrapper = shallow(<Calculator />);
  it('renders the <Calculator /> component', () => {
    expect(wrapper).to.have.length(1);
  });

  describe('#add', () => {
    it('should return 10 when adding 4 + 6', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '4'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '6'}});
      wrapper.find('.calculator-add').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('10');
    });
  });

  describe('#subtract', () => {
    it('should return 5 when doing 10 - 5', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '10'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '5'}});
      wrapper.find('.calculator-subtract').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('5');
    });
    it('should return (negative) -3 when doing 5 - 8', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '5'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '8'}});
      wrapper.find('.calculator-subtract').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('-3');
    });
  });

  describe('#multiply', () => {
    it('should return 21 when multiplying 7 with 3', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '7'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '3'}});
      wrapper.find('.calculator-multiply').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('21');
    });
    it('should return positive 9 when multiplying the two negative numbers -3', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '-3'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '-3'}});
      wrapper.find('.calculator-multiply').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('9');
    });
    it('should return the negative number -15 when multiplying 5 with -3', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '5'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '-3'}});
      wrapper.find('.calculator-multiply').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('-15');
    });
  });

  describe('#divide', () => {
    it('should return 3 when dividing 9 by 3', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '9'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '3'}});
      wrapper.find('.calculator-divide').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('3');
    });
    it('should return the negative number -3 when dividing -9 with 3', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '-9'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '3'}});
      wrapper.find('.calculator-divide').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal('-3');
    });
    it('should return Infinity when dividing a number with 0', () => {
      wrapper
        .find('.calculator-firstnumber')
        .first()
        .simulate('change', {target: {value: '9'}});
      wrapper
        .find('.calculator-secondnumber')
        .first()
        .simulate('change', {target: {value: '0'}});
      wrapper.find('.calculator-divide').simulate('click');
      expect(wrapper.find('.calculator-result').first().text()).to.equal(
        'Infinity'
      );
    });
  });
});
