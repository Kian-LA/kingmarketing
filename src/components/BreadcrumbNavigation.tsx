import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  url: string;
}

const BreadcrumbNavigation: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
  ];

  // Build breadcrumb items from pathname
  let currentPath = '';
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;
    
    // Convert pathname to readable name
    let name = pathname
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special cases for better naming
    switch (pathname) {
      case 'case-studies':
        name = 'Case Studies';
        break;
      case 'free-audit':
        name = 'Free Audit';
        break;
      case 'resources':
        name = 'Resources';
        break;
      case 'guides':
        name = 'Marketing Guides';
        break;
      case 'reports':
        name = 'Industry Reports';
        break;
      case 'templates':
        name = 'Templates';
        break;
      case 'calculator':
        name = 'ROI Calculator';
        break;
      case 'webinars':
        name = 'Webinars';
        break;
      case 'auth':
        name = 'Account';
        break;
      case 'login':
        name = 'Sign In';
        break;
      case 'signup':
        name = 'Sign Up';
        break;
    }

    breadcrumbs.push({ name, url: currentPath });
  });

  return (
    <>
      <SchemaMarkup 
        type="breadcrumb" 
        data={{
          items: breadcrumbs
        }} 
      />
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight size={16} className="text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    to={breadcrumb.url}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    <Home size={16} className="mr-1" />
                    {breadcrumb.name}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 dark:text-white font-medium">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default BreadcrumbNavigation;