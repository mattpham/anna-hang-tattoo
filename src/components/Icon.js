import styled from 'styled-components';

const Icon = styled.div`
  display: inline-block;
  font-size: 1.75em;
  color: #fff;
  width: 2em;
  height: 2em;
  position: relative;
  background-color: ${props => (props.color ? props.color : 'var(--accent-color-secondary)')};
  border-radius: 100%;
  box-sizing: border-box;

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 0.75em;
    height: 0.75em;
  }
`;

export default Icon;
