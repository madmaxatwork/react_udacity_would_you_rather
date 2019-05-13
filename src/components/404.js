import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
      <div>404 Not Found</div>
      <NavLink to="/">Click here </NavLink> to go back to home page
    </div>
  );
}

export default NotFound