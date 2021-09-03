const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initState = {

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

}

const profileReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_NEW_POST:
            if (state.newPostText.length > 0) {
                state.posts.push({
                    id: state.posts.reduce( (max, curr) => {
                        return Math.max(max, curr.id);
                    }, 0) + 1,
                    text: state.newPostText,
                    date: new Date().getTime(),
                    likes: 0,
                });
                state.newPostText = '';
            }
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default: return state;
    }
}

export const addNewPostCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;