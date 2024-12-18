import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Phone } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { to: '/', text: 'Home', icon: <Home className="w-4 h-4" /> },
    { to: '/about', text: 'About Us', icon: <Info className="w-4 h-4" /> },
    { to: '/contact', text: 'Contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600">MediCare AI</span>
          </div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}