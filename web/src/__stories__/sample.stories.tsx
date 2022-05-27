import { Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Test',
} as Meta;

export const Basic = () => {
  return <TestComponent text="Hello World!" />;
};

function TestComponent({ text }: {text: string}) {
  return <div>{text}</div>;
}
