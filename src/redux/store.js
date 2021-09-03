import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

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
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber();
  },

};

export default store;

