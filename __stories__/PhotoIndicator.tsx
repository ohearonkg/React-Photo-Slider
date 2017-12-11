import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PhotoIndicator } from '../src/components/PhotoIndicator';

storiesOf('Photo Indicator', module)
  .add('Photo Indicator', () => (
    <PhotoIndicator currentPhotoNumber='1' totalNumberPhotos='13' />
  ))