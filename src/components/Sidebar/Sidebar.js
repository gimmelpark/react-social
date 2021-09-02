import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './Sidebar.module.css';

function Sidebar(props) {
  const navLinks = [
    {title: 'Profile', route: '/profile'},
    {title: 'Messages', route: '/messages'},
    {title: 'News', route: '/news'},
    {title: 'Music', route: '/music'},
    {title: 'Settings', route: '/settings'},
  ]

  return (
    <div className={classes.pageSidebar}>
      <div className="pt-3 mx-4">
        {
          navLinks.map( link => (
              <div key={ link.title } className={"mt-1"}>
                <NavLink
                  className={`btn btn-secondary ${classes.sidebarLink}`}
                  to={ link.route }
                  activeClassName={classes.active}
                >{ link.title }</NavLink>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default Sidebar;