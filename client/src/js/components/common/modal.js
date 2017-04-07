import React from 'react';


const Modal = ({modal, Component}) => {
  return (
    <div>
      <a className="waves-effect waves-light btn" href={'#'+modal}>Modal</a>
      <div id={modal} className="modal bottom-sheet">
      <Component />
      </div>
    </div>
  );
}

export default Modal;