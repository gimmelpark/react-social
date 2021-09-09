import React from 'react';

import { addNewPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = function (props) {

  const addPost = () => {
    props.dispatch( addNewPostCreator() );
  };

  const onNewPostChange = (text) => {
    props.dispatch( updateNewPostTextCreator(text) );
  };

  return (
    <Posts addPost={ addPost }
           onNewPostChange={ onNewPostChange }
           posts={ props.profilePage.posts }
           newPostText={ props.profilePage.newPostText }
    />
  );
};

export default PostsContainer;