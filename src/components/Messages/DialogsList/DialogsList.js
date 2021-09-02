import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './DialogsList.module.css'

function DialogsList (props) {

  return (
    <div className="mx-5">
      {
        props.dialogs.map( dialog => (
          <div className={"mt-2 " + classes.dialogsWrapper} key={ dialog.id }>
            <NavLink
              className={classes.link}
              to={ `/messages/${dialog.id}` }
              activeClassName="text-primary"
            >{ dialog.userName }</NavLink>
          </div>
        ))
      }
    </div>
  );
}


export default DialogsList