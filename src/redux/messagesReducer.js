const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        
        case ADD_NEW_MESSAGE:
            if (state.newMessageText.length > 0) {
                state.messages.push({
                    id: state.messages.reduce( (max, curr) => {
                        return Math.max(max, curr.id);
                    }, 0) + 1,
                    text: state.newMessageText,
                    fromUser: true,
                    date: new Date().getTime(),
                });
                state.newMessageText = '';
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;

        default: return state;
    }
}

export const addNewMessageCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default messagesReducer