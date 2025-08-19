import React, { useState } from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  bestseller?: boolean;
}

interface MenuData {
  [key: string]: MenuItem[];
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuData: MenuData = {
    coffee: [
      {
        name: "Signature Cookie Dough Latte",
        price: "₹320",
        description: "Our signature blend with edible cookie dough pieces",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
        bestseller: true
      },
      {
        name: "Artisan Cappuccino",
        price: "₹280",
        description: "Premium espresso with perfectly steamed milk",
        image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Cold Brew Supreme",
        price: "₹300",
        description: "Slow-brewed for 18 hours, served over ice",
        image: "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    cookieDough: [
      {
        name: "Triple Chocolate Cookie Dough Frappe",
        price: "₹380",
        description: "Chocolate cookie dough blended with premium cocoa",
        image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400",
        bestseller: true
      },
      {
        name: "Vanilla Bean Cookie Dough Shake",
        price: "₹350",
        description: "Madagascar vanilla with cookie dough chunks",
        image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    desserts: [
      {
        name: "Artisan Chocolate Tart",
        price: "₹250",
        description: "Belgian chocolate with seasonal berries",
        image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Tiramisu Classico",
        price: "₹280",
        description: "Traditional Italian recipe with mascarpone",
        image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    platters: [
      {
        name: "Artisan Breakfast Platter",
        price: "₹650",
        description: "Eggs, artisan bread, seasonal fruits, and premium coffee",
        image: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Mediterranean Sharing Board",
        price: "₹850",
        description: "Selection of cheeses, olives, and artisan breads",
        image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  };

  const categories = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'cookieDough', label: 'Cookie Dough Drinks' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'platters', label: 'Platters' }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our curated selection of artisanal coffee and gourmet food
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            <div className="flex pl-32 space-x-2 bg-gray-100 dark:bg-gray-800 p-2  min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.bestseller !== undefined && item.bestseller && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Online Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Order Online</h3>
            <p className="text-xl mb-6">Get your favorites delivered to your doorstep</p>
            <div className="space-y-4">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Order on Zomato
              </button>
              <button className=" bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Order on Swiggy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;