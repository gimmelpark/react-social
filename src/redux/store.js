const store = {
  _state: {
    profilePage: {

      newPostText: '',

      profileDetails: {
        id: 1,
        name: 'Dmitriy',
        status: 'aaa',
        age: 21,
      },

      posts: [
        { id: 1,
          date: 1622722800000,
          text: 'Post 1',
          likes: 32
        },
        { id: 2,
          date: 1622722920000,
          text: 'Hello world',
          likes: 2
        },
        { id: 3,
          date: 1628079600000,
          text: 'Post 3',
          likes: 21
        },
      ],

    },

    messagesPage: {

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

    },
  },
  _callSubscriber() {
    console.log('render');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {

      case 'ADD-NEW-POST':
        if (this._state.profilePage.newPostText.length > 0) {
          this._state.profilePage.posts.push({
            id: this._state.profilePage.posts.reduce( (max, curr) => {
              return Math.max(max, curr.id);
            }, 0) + 1,
            text: this._state.profilePage.newPostText,
            date: new Date().getTime(),
            likes: 0,
          });
          this._callSubscriber();
          this._state.profilePage.newPostText = '';
        }
        break;

      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber();
        break;

      case 'ADD-NEW-MESSAGE':
        if (this._state.messagesPage.newMessageText.length > 0) {
          this._state.messagesPage.messages.push({
            id: this._state.messagesPage.messages.reduce( (max, curr) => {
              return Math.max(max, curr.id);
            }, 0) + 1,
            text: this._state.messagesPage.newMessageText,
            fromUser: true,
            date: new Date().getTime(),
          });
          this._callSubscriber();
          this._state.messagesPage.newMessageText = '';
        }
        break;

      case 'UPDATE-NEW-MESSAGE-TEXT':
        this._state.messagesPage.newMessageText = action.text;
        this._callSubscriber();
        break;

      default: break;
    }
  },

};

export default store

export const addNewPostCreator = () => ({ type: 'ADD-NEW-POST' });
export const updateNewPostTextCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', text: text });
export const addNewMessageCreator = () => ({ type: 'ADD-NEW-MESSAGE' });
export const updateNewMessageTextCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', text: text });
