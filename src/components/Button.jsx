import React from 'react';
import './Button.css';

export default function Button(props) {

  return (
    <button

      onClick={e => props.click && props.click(e.target.label)}
      className={`
         button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
      {props.label}
    </button>
  );
}