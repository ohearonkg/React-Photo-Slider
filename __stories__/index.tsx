import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('with text', () => (
    <h1> Hello Button</h1>
  ))
  .add('with some emoji', () => (
    <h1> 😀 😎 👍 💯</h1>
  ));