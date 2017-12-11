import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PhotoContainer } from '../src/components/PhotoContainer';

storiesOf('Photo Container', module)
  .add('Photo Container', () => (
    <PhotoContainer photoUrl='http://via.placeholder.com/1580x830' />
  ));
