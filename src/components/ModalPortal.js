import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Creates a portal on div container with id = "modal-portal" defined in html.js
const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-portal')
  );
};

export default ModalPortal;

