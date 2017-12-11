import * as React from 'react';
import { shallow } from 'enzyme';
import { PhotoIndicator } from '../src/components/PhotoIndicator';

describe('Photo Indicator', () => {

    it('Should Take A Prop Representing The Currently Selected Photos Number And Render It', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber='1' totalNumberPhotos='7'/>); 
        expect(wrapper.html()).toMatch(new RegExp('1'))
    });

    it('Should Take A Prop Representing The Total Number of Photos And Render It', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber='1' totalNumberPhotos='7'/>); 
        expect(wrapper.html()).toMatch(new RegExp('7'))
    });

})