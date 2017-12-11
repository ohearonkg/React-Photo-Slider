import { configure } from '@storybook/react';

function loadStories() {
  require('../__stories__/PhotoIndicator.tsx');
  require('../__stories__/PhotoContainer.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);