import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.pageHeader}>
      <h4 className="mt-3 mx-3 text-white">React</h4>
    </div>
  );
}

export default Header;