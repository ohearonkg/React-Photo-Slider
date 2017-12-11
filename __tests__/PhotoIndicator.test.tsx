import * as React from 'react';
import { shallow } from 'enzyme';
import { PhotoIndicator } from '../src/components/PhotoIndicator';

describe('Photo Indicator', () => {
    it('Should Take A Prop Representing The Currently Selected Photos Number And Render It', () => {
        const wrapper = shallow(<PhotoIndicator currentPhoto='1'/>); 
        expect(wrapper.html()).toMatch(new RegExp('1'))
    })
})