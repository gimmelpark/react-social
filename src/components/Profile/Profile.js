import React from 'react';
import classes from './Profile.module.css';

import ProfileDetailContainer from "./ProfileDetail/ProfileDetailContainer";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
  return (
    <div className={classes.pageContent}>
      <h5 className="mt-2 mx-3 ">Profile</h5>

      <ProfileDetailContainer profileDetails={ props.profilePage.profileDetails } />
      <PostsContainer
        profilePage={ props.profilePage }
        dispatch={ props.dispatch }
      />

    </div>
  );
}

export default Profile;