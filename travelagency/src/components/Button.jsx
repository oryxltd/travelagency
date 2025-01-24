import React from 'react';
import '../components/button.css';

const Button = ({text, onClick, type="fill"}) => {
  return (
    <div>
        <button className={`btn ${type}`} onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;