import * as React from 'react';
import { shallow } from 'enzyme';
import { PhotoContainer } from '../src/components/PhotoContainer';

describe('Photo Container', () => {

  it('Should Take As Prop The A Url To The Photo That Is To Be Displayed And Render It Within The Image Tag', () => {
    const wrapper = shallow(<PhotoContainer photoUrl='someUrl'/>);
    expect(wrapper.html()).toMatch(new RegExp('someUrl'));
  });
});