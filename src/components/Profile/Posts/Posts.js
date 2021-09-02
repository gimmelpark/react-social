import React from 'react';
import Post from "./Post/Post";

import { addNewPostCreator, updateNewPostTextCreator } from "../../../redux/store";

const Posts = function (props) {

  const addPost = () => {
    props.dispatch( addNewPostCreator() );
  };

  const onNewPostChange = (e) => {
    props.dispatch( updateNewPostTextCreator(e.target.value) );
  };

  return (
    <div className={"mt-3 mx-3"}>

      <div>Posts:</div>

      <div>
        <div>
          <textarea value={ props.profilePage.newPostText } onChange={ onNewPostChange }/>
        </div>
        <button onClick={ addPost } className={"btn btn-success btn-sm"}>Add post</button>
      </div>

      <div>
        {
          props.profilePage.posts.sort( (a, b) => b.date - a.date )
            .map( post => <Post key={ post.id } post={ post } /> )
        }
      </div>

    </div>
  );
};

export default Posts;