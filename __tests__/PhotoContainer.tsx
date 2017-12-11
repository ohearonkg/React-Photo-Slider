import * as React from 'react';
import { shallow } from 'enzyme';
import { PhotoContainer } from '../src/components/PhotoContainer';

describe('Photo Container', () => {

  it('Should Render', () => {
    const wrapper = shallow(<PhotoContainer />);
    expect(wrapper);
  });
});