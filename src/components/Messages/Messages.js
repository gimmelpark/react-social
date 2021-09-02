import React from 'react';
import classes from './Messages.module.css'

import DialogsList from "./DialogsList/DialogsList";
import DialogMessages from "./DialogMessages/DialogMessages";

function Messages(props) {

  return (
    <div>
      <h5 className="mt-2 mx-3">Your dialogs:</h5>

      <div className={ classes.messagesContent }>
        <DialogsList dialogs={ props.messagesPage.dialogs }/>
        <DialogMessages
          messagesPage={ props.messagesPage }
          dispatch={ props.dispatch }
        />
      </div>

    </div>
  );
}

export default Messages;