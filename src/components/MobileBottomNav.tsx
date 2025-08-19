import React from 'react';
import { Home, Menu, User, Image, Plus, X } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  showMoreMenu: boolean;
  setShowMoreMenu: (show: boolean) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  currentPage, 
  setCurrentPage, 
  showMoreMenu, 
  setShowMoreMenu 
}) => {
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Menu },
    { id: 'about', label: 'About', icon: User },
    { id: 'gallery', label: 'Gallery', icon: Image }
  ];

  const moreNavItems = [
    { id: 'events', label: 'Events & Offers', icon: Image },
    { id: 'contact', label: 'Contact Us', icon: User }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setShowMoreMenu(false);
  };

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  return (
    <>
      {/* More Menu Overlay */}
      {showMoreMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setShowMoreMenu(false)}
        />
      )}

      {/* More Menu Slider */}
      <div className={`fixed bottom-16 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl transform transition-transform duration-300 ${
        showMoreMenu ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">More Pages</h3>
            <button
              onClick={() => setShowMoreMenu(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {moreNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="grid grid-cols-5 h-16">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                currentPage === item.id
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
              {currentPage === item.id && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
              )}
            </button>
          ))}
          
          {/* More Button */}
          <button
            onClick={toggleMoreMenu}
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
              showMoreMenu
                ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400'
            }`}
          >
            <Plus className={`h-5 w-5 transition-transform duration-300 ${showMoreMenu ? 'rotate-45' : ''}`} />
            <span className="text-xs font-medium">More</span>
            {showMoreMenu && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileBottomNav;