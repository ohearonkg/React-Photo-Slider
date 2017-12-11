import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '../src/components/Hello';

describe('Hello', () => {
    it('Should Render', () => {
        const wrapper = shallow(<Hello name='World'/>);
        expect(wrapper.html()).toMatch(new RegExp('Hello World'))
    })
})