import React from 'react';
import { useAuth } from '../context/AuthContext';

const SettingsPage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <p className="bg-gray-100 px-4 py-2 rounded">{user?.email || 'N/A'}</p>
      </div>

      {/* Username  */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
         <p className="bg-gray-100 px-4 py-2 rounded">{user?.userName || 'N/A'}</p>
      </div>

      {/* Password change (future) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Change password (coming soon)"
          className="bg-gray-100 px-4 py-2 rounded w-full cursor-not-allowed"
          disabled
        />
      </div>

      {/* Payment info (Phase 3) */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Payment Info</label>
        <p className="text-sm text-gray-400 italic">Stripe integration coming soon</p>
      </div>
    </div>
  );
};

export default SettingsPage;
