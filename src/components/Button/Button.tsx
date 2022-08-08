import React from 'react'

import { ButtonContainer } from './Button.styles'
import { ButtonProps } from './Button.types'

function Button({ label, type = 'button', secondary, disabled, onClick }: ButtonProps) {
    return (
        <ButtonContainer data-testid="button" type={type} onClick={onClick} secondary={secondary} disabled={disabled}>
            {label}
        </ButtonContainer>
    )
}

export default Button
