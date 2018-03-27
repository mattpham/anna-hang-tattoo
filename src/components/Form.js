import styled, { css } from 'styled-components';
import { rhythm } from '../utils/typography';

const inputStyles = css`
  transition: background-color 0.2s ease;
  background-color: #f4f4f4;
  border-radius: 3px;
  border: 0;
  padding: 1em;
  width: 100%;
`;

export const Form = styled.form``;

export const Input = styled.input`
  ${inputStyles} 
`;

export const Submit = Input.extend.attrs({
  type: 'submit',
  value: 'Submit'
})`
  background-color: #c0b283;
  color: #f4f4f4;
  &:hover {
    background-color: gray;
  }
`;

export const TextArea = styled.textarea.attrs({
})`
  ${inputStyles}
  resize: vertical;
`;

export const Select = styled.select`
    ${inputStyles}
`;
