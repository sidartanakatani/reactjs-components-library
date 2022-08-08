import React from 'react'

import { Story, Meta } from '@storybook/react'

import Button from './Button'
import { ButtonProps } from './Button.types'

export default {
    component: Button,
    argTypes: {},
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'This is a button',
    disabled: false,
}
