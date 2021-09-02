import React from 'react';
import classes from './Profile.module.css';
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import Posts from "./Posts/Posts";

function Profile(props) {
  return (
    <div className={classes.pageContent}>
      <h5 className="mt-2 mx-3 ">Profile</h5>

      <ProfileDetail profileDetails={ props.profilePage.profileDetails } />
      <Posts
        profilePage={ props.profilePage }
        dispatch={ props.dispatch }
      />

    </div>
  );
}

export default Profile;