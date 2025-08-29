import React from 'react';

function ProfileCard({ name, jobTitle, location }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      <p>{location}</p>
    </div>
  );
}

export default ProfileCard;