import React from 'react';

const ProfileDetail = (props) => {
  return (
    <div className={"mx-4"}>
      <div>
        <span>Name: </span>
        <span className={"text-secondary"}>{ props.profileDetails.name }</span>
      </div>
      <div>
        <span>Status: </span>
        <span className={"text-secondary"}>{ props.profileDetails.status }</span>
      </div>
      <div>
        <span>Age: </span>
        <span className={"text-secondary"}>{ props.profileDetails.age }</span>
      </div>
    </div>
  );
};

export default ProfileDetail;