import React from 'react'
import classes from './DialogMessage.module.css'

const DialogMessages = (props) => {
  const messageClass = props.message.fromUser ? classes.messageWrapper + ' ' + classes.messageRight : classes.messageWrapper;

  const timeText = (date) => {
    date = date ? new Date(date) : 'Invalid Date';
    if (String(date) === 'Invalid Date') return 'Unknown time'
    return `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
  }

  return (
    <div className={messageClass}>
      <div className={classes.messageTime}>{ timeText(props.message.date) }</div>
      <div>{ props.message.text }</div>
    </div>
  )
}

export default DialogMessages
