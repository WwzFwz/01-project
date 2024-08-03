// components/UserProfile.js

import React from 'react';

const UserProfile = ({ name, description, job }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xl font-bold text-white">U</span>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">{job}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default UserProfile;
