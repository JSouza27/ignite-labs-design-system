import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './index'

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta

export const Default: StoryObj = {}
