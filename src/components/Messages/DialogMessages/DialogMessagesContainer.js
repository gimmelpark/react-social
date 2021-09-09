import React from 'react'

import {addNewMessageCreator, updateNewMessageTextCreator} from "../../../redux/messagesReducer";
import DialogMessages from "./DialogMessages";

function DialogMessagesContainer(props) {

  const sendMessage = () => {
    props.dispatch( addNewMessageCreator() );
  };

  const onMessageChange = (text) => {
    props.dispatch( updateNewMessageTextCreator(text) );
  };

  return (
    <DialogMessages sendMessage={ sendMessage }
                    onMessageChange={ onMessageChange }
                    messages={ props.messagesPage.messages }
                    newMessageText={ props.messagesPage.newMessageText }
    />
  );
};

export default DialogMessagesContainer