import React from 'react';
import { Home, Coffee, User, Image, Calendar, Mail } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  currentPage, 
  setCurrentPage 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Coffee },
    { id: 'about', label: 'About', icon: User },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
  };

  return (
    <div className="md:hidden">
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex justify-around items-center h-16 px-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 ${
                currentPage === item.id
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
              aria-label={item.label}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              <item.icon 
                className={`h-5 w-5 transition-transform ${
                  currentPage === item.id ? 'scale-110' : ''
                }`} 
              />
              <span className="text-[10px] font-medium mt-0.5">
                {item.label}
              </span>
              {currentPage === item.id && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;