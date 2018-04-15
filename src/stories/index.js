import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import '../semantic/dist/semantic.min.css';
import { Button as Button1 } from 'semantic-ui-react';

import SearchBar from '../SearchBar';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with some emoji', () => <Button1>Button1</Button1>);
