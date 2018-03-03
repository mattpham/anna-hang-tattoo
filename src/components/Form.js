import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid/';
const Form = styled.form`
  display: grid;
`;

const FormInput = styled.input`
  border-radius: 2px;
  border: 0;
  background-color: #f4f4f4;
  padding: 1em;
  transition: background-color 0.1s ease;
  &:focus,
  &:hover {
    background-color: #dcd0c0;
  }

  &[type='submit'] {
    background-color: grey;
    color: #f4f4f4;
    &:hover {
      background-color: #c0b283;
    }
  }
`;

const FormTextArea = styled.input`
  border-radius: 2px;
  border: 0;
  background-color: #f4f4f4;
  padding: 1em;
  &:focus,
  &:hover {
    background-color: #dcd0c0;
  }
`;

const FormSelect = styled.select`
  border-radius: 2px;
  border: 0;
  background: #f4f4f4
    url("data:image/svg+xml;utf8,<svg width='2em' height='2em' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z'/></svg>")
    no-repeat;
  padding: 1em;
  appearance: none;
  background-position: right center;
  &:-moz-placeholder {
    color: red;
    font-style: italic;
  }
  &:focus,
  &:hover {
    background-color: #dcd0c0;
  }
`;

export { Form, FormInput, FormTextArea, FormSelect };
