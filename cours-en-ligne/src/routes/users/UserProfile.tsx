import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/slices/authSlice';

const UserProfile: React.FC = () => {
  const user = useSelector(selectCurrentUser);

  if (!user) return <div>Please log in to view your profile</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default UserProfile;