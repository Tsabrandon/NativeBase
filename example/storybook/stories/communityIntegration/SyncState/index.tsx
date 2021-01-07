import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../components/Wrapper';
import TodoApp from './TodoApp';

storiesOf('SyncState', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('SyncState Todo App', () => <TodoApp />);
