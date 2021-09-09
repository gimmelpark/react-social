import React from 'react';
import Post from "./Post/Post";


const Posts = function (props) {
  return (
    <div className={"mt-3 mx-3"}>

      <div>Posts:</div>

      <div>
        <div>
          <textarea value={ props.newPostText }
                    onChange={ (e) => props.onNewPostChange(e.target.value) }/>
        </div>
        <button onClick={ props.addPost }
                className={"btn btn-success btn-sm"}
        >Add post</button>
      </div>

      <div>
        {
          props.posts.sort( (a, b) => b.date - a.date )
            .map( post => <Post key={ post.id } post={ post } /> )
        }
      </div>

    </div>
  );
};

export default Posts;