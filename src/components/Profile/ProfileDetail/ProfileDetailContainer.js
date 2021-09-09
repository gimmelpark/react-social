import React from 'react';
import ProfileDetail from "./ProfileDetail";

const ProfileDetailContainer = (props) => {
  return (
    <ProfileDetail profileDetails={ props.profileDetails } />
  );
};

export default ProfileDetailContainer;