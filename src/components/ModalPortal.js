import ReactDOM from 'react-dom';

// Creates a portal on div container with id = "modal-portal" defined in html.js
const ModalPortal = ({ children }) =>
  ReactDOM.createPortal(
    children,
    // eslint-disable-next-line no-undef
    document.getElementById('modal-portal'),
  );

export default ModalPortal;
