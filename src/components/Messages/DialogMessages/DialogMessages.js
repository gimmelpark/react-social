import React from 'react'
import classes from './DialogMessages.module.css'

import DialogMessage from "./DialogMessage/DialogMessage";
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../../redux/messagesReducer";

function DialogMessages(props) {

  const sendMessage = () => {
    props.dispatch( addNewMessageCreator() );
  };

  const onMessageChange = (e) => {
    props.dispatch( updateNewMessageTextCreator(e.target.value) );
  };

  return (
    <div className={classes.messages}>
      <div className={classes.messagesBox}>

        <div className={classes.messagesWrapper}>
          <div className={classes.messagesList}>
            {
              props.messagesPage.messages.map( message => (
                <DialogMessage key={ message.id } message={ message } />
              ))
            }
          </div>
        </div>

        <div className={classes.newMessage}>
          <input
            onChange={ onMessageChange }
            value={ props.messagesPage.newMessageText }
            type="text"
            placeholder="Enter your message"
          />
          <button
            onClick={ sendMessage }
            type="button"
          >&gt;</button>
        </div>

      </div>
    </div>
  );
};

export default DialogMessages