import * as React from 'react';
import { shallow } from 'enzyme';
import { PhotoIndicator } from '../src/components/PhotoIndicator';

describe('Photo Indicator', () => {

    it('Should Take A Prop Representing The Currently Selected Photos Number And Render It', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={7}/>); 
        expect(wrapper.html()).toMatch(new RegExp('1'))
    });

    it('Should Add A Zero In Front of The Number Representing The Currently Selected Photo Should It Be A Single Digit', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={7}/>); 
        expect(wrapper.html()).toMatch(new RegExp('01'))
    });

    it('Should NOT Add A Zero In Front of The Number Representing The Currently Selected Photo Should It Be A Two Digit Number', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={11} totalNumberPhotos={7}/>); 
        expect(wrapper.html()).not.toMatch(new RegExp('011'))
    });

    it('Should Take A Prop Representing The Total Number of Photos And Render It', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={7}/>); 
        expect(wrapper.html()).toMatch(new RegExp('7'))
    });

    it('Should Add A Zero In Front of The Number Representing The Total Number of Photos Should It Be A Single Digit', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={7}/>); 
        expect(wrapper.html()).toMatch(new RegExp('07'))
    });

    it('Should NOT Add A Zero In Front of The Number Representing The Total Number of Photos Should It Be A Two Digit Number', () => {
        const wrapper = shallow(<PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={77}/>); 
        expect(wrapper.html()).not.toMatch(new RegExp('077'))
    });

    it('Should Take As A Prop A Function Which Should Be Called When Clicking The Next Arrow', () => {
        expect(false).toBeTruthy();
    });

    it('Should Take As A Prop A Function Which Should Be Called When Clicking The Previous Arrow', () => {
        expect(false).toBeTruthy();
    });
})