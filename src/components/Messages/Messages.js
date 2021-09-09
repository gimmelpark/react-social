import React from 'react';
import classes from './Messages.module.css'

import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

function Messages(props) {

  return (
    <div>
      <h5 className="mt-2 mx-3">Your dialogs:</h5>

      <div className={ classes.messagesContent }>
        <DialogsListContainer dialogs={ props.messagesPage.dialogs }/>
        <DialogMessagesContainer messagesPage={ props.messagesPage }
                                 dispatch={ props.dispatch }
        />
      </div>

    </div>
  );
}

export default Messages;