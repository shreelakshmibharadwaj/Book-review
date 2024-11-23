// src/pages/UserProfilePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/userSlice';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { profile, status } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading profile...</p>;
  if (status === 'failed') return <p>Error loading profile.</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Joined: {profile.joinedDate}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
};

export default UserProfilePage;
