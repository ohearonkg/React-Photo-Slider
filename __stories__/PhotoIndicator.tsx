import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PhotoIndicator } from '../src/components/PhotoIndicator';

storiesOf('Photo Indicator', module)
  .add('Single Digit Current Photo', () => (
    <PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={13} />
  ))
  .add('Single Digit Number of Photos', () => (
    <PhotoIndicator currentPhotoNumber={1} totalNumberPhotos={3} />
  ))
  .add('Double Digits', () => (
    <PhotoIndicator currentPhotoNumber={12} totalNumberPhotos={13} />
  ))

