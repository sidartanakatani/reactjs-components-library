import { MouseEventHandler } from 'react'

export interface ButtonProps {
    label: string
    type?: 'button' | 'submit' | 'reset'
    secondary?: boolean
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}
