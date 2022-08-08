import styled from 'styled-components'

import { ButtonProps } from './Button.types'

export const ButtonContainer = styled.button<Omit<ButtonProps, 'label'>>`
    padding: 0.8em;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;

    color: ${({ secondary }) => (secondary ? '#03B5AA' : '#FFFFFF')};
    background-color: ${({ secondary }) => (secondary ? '#FFFFFF' : '#03B5AA')};

    border-radius: 0.25rem;
    border-style: solid;
    border-width: ${({ secondary }) => (secondary ? '1px' : 0)};
    border-color: ${({ secondary }) => (secondary ? '#03B5AA' : 'none')};

    :hover {
        background-color: ${({ secondary }) => (secondary ? '#FFFFFF' : '#037971')};
        border-color: ${({ secondary }) => (secondary ? '#037971' : 'none')};
        color: ${({ secondary }) => (secondary ? '#037971' : '#FFFFFF')};
        transition: 0.2s;
    }
    :active {
        background-color: ${({ secondary }) => (secondary ? '#FFFFFF' : '#023436')};
        border-color: ${({ secondary }) => (secondary ? '#023436' : 'none')};
        color: ${({ secondary }) => (secondary ? '#023436' : '#FFFFFF')};
        transition: 0.2s;
    }
    :disabled {
        background-color: ${({ secondary }) => (secondary ? '#FFFFFF' : '#EEE')};
        border-color: ${({ secondary }) => (secondary ? '#EEE' : 'none')};
        color: #ccc;
        transition: 0.2s;
        cursor: default;
    }
`
