import React from 'react'

import DialogsList from "./DialogsList";

function DialogsListContainer (props) {

  return (
    <DialogsList dialogs={props.dialogs}/>
  );
}

export default DialogsListContainer