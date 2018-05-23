import styled from 'styled-components';

import { BODY_FONT_FAMILY } from '../utils/styles/typography';

const Button = styled.button`
    border: none;
    padding: .75em 1.5em;
    text-decoration: none;
    background-color: var(--accent-color-secondary);
    color: #FFF;
    font-family: ${BODY_FONT_FAMILY};
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    z-index: 1;
    transition: transform 150ms ease;
    &:active {
        transform: scale(0.99);
    }
    &:before {
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transform-origin: left;
        transform: scaleX(0);
        overflow: hidden;
        position: absolute;
        z-index: -1;
        transition: all 150ms ease-in-out;
    }
    &:hover,
    &:focus {
        &:before{
            transform: scaleX(1);
            background: var(--accent-color-primary);
        }
    }
}`;

export default Button;
