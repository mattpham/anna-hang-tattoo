import styled from 'styled-components';

import Button from './Button';
import { BODY_FONT_FAMILY } from '../utils/styles/typography';

export const Form = styled.form`
  max-width: 48em;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Input = styled.input`
  font-family: ${BODY_FONT_FAMILY};
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1.5em;
  outline-style: none;
  border: 1px solid #fff;
  transition: border-color 0.1s ease-in;

  &:focus {
    border-color: var(--accent-color-secondary);
  }
`;

export const TextArea = Input.withComponent('textarea').extend`
  height: 10em;
  resize: vertical;
`;

export const Select = Input.withComponent('select');

export const Submit = Button.extend.attrs({
  type: 'submit',
  value: 'Submit',
})``;
