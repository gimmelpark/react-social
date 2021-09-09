import React from 'react'
import classes from './DialogMessages.module.css'

import DialogMessage from "./DialogMessage/DialogMessage";

function DialogMessages(props) {
  return (
    <div className={classes.messages}>
      <div className={classes.messagesBox}>

        <div className={classes.messagesWrapper}>
          <div className={classes.messagesList}>
            {
              props.messages.map( message => (
                <DialogMessage key={ message.id } message={ message } />
              ))
            }
          </div>
        </div>

        <div className={classes.newMessage}>
          <input
            onChange={ (e) => props.onMessageChange(e.target.value) }
            value={ props.newMessageText }
            type="text"
            placeholder="Enter your message"
          />
          <button
            onClick={ props.sendMessage }
            type="button"
          >&gt;</button>
        </div>

      </div>
    </div>
  );
};

export default DialogMessages