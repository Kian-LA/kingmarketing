import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings, BarChart3, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {getInitials(user.email || '')}
          </span>
        </div>
        <span className="hidden md:block text-gray-700 dark:text-gray-300 font-medium">
          {user.email}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {getInitials(user.email || '')}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {user.user_metadata?.first_name || 'User'}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              to="/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </Link>
            
            <button
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={18} />
              <span>Account Settings</span>
            </button>
            
            <button
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard size={18} />
              <span>Billing</span>
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 py-2">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full text-left"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;