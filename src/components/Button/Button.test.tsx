import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Component renderization', () => {
    it('renders primary button correctly', () => {
        const { queryByTestId } = render(<Button label="Submit" />)
        const component = queryByTestId('button')

        expect(component).toBeInTheDocument()
        expect(component?.textContent).toBe('Submit')
        expect(component).toHaveStyle('color: #FFFFFF')
        expect(component).toHaveStyle('background-color: #03B5AA')
        expect(component).toHaveStyle('border-width: 0')
    })

    it('renders secondary button correctly', () => {
        const { queryByTestId } = render(<Button label="Secondary Button" secondary />)
        const component = queryByTestId('button')

        expect(component).toBeInTheDocument()
        expect(component?.textContent).toBe('Secondary Button')
        expect(component).toHaveStyle('color: #03B5AA')
        expect(component).toHaveStyle('background-color: #FFFFFF')
        expect(component).toHaveStyle('border-width: 1px')
        expect(component).toHaveStyle('border-color: #03B5AA')
    })
})
