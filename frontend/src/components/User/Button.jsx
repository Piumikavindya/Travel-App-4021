import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../../styles/Home.css";

const Button = ({ to, children }) => {
  return (
    <div>
      <button className='sbutton  text-black p-2 font-semibold'>
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
