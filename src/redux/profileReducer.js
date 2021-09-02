const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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