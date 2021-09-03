const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initState = {

    dialogs: [
        { id: 1, userName: 'dima', userId: 1 },
        { id: 2, userName: 'ksenia', userId: 2 },
        { id: 3, userName: 'andr', userId: 3 },
        { id: 4, userName: 'anas', userId: 4 },
        { id: 5, userName: 'nikita', userId: 5 },
    ],

    messages: [
        {
            id: 1,
            date: 1630593171580,
            text: 'Hi',
            fromUser: false
        },
        {
            id: 2,
            date: 1630593181580,
            text: 'Hi!',
            fromUser: true
        },
        {
            id: 3,
            date: 1630593271580,
            text: 'One',
            fromUser: false
        },
        {
            id: 4,
            date: 1630593371580,
            text: 'Two',
            fromUser: false
        },
        {
            id: 5,
            date: 1630593471580,
            text: 'Three',
            fromUser: true
        },
        {
            id: 6,
            date: 1630593571580,
            text: 'Four',
            fromUser: true
        },
        {
            id: 7,
            date: 1630593671580,
            text: 'Five',
            fromUser: false
        },
        {
            id: 8,
            date: 1630593771580,
            text: 'long text long text long text long text long text long text long text long text long text long text long text ',
            fromUser: false
        },
        {
            id: 9,
            date: 1630593871580,
            text: 'long text long text long text long text long text long text long text long text long text long text long text ',
            fromUser: true
        },

    ],

    newMessageText: '',

}

const messagesReducer = (state = initState, action) => {
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