import { configure } from '@storybook/react';

function loadStories() {
  require('../__stories__/PhotoIndicator.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);