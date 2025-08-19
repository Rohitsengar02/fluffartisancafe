import React from 'react';
import { Calendar, Clock, Gift, Users } from 'lucide-react';

const EventsPage: React.FC = () => {
  const currentOffers = [
    {
      title: "Happy Hours Special",
      description: "25% off on all beverages",
      time: "3 PM - 6 PM Daily",
      validUntil: "Valid till 31st March",
      color: "from-amber-500 to-orange-500",
      icon: Clock
    },
    {
      title: "Weekend Cookie Dough Festival",
      description: "Buy 2 Get 1 Free on all cookie dough drinks",
      time: "Saturday & Sunday",
      validUntil: "Every Weekend",
      color: "from-purple-500 to-pink-500",
      icon: Gift
    },
    {
      title: "Group Dining Offer",
      description: "Book for 4+ people and get 20% off",
      time: "All Day",
      validUntil: "Valid till 30th April",
      color: "from-green-500 to-teal-500",
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      title: "Coffee Cupping Session",
      date: "March 15, 2024",
      time: "7:00 PM - 9:00 PM",
      description: "Learn about different coffee origins and brewing techniques with our head barista",
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹500 per person"
    },
    {
      title: "Cookie Dough Making Workshop",
      date: "March 22, 2024",
      time: "4:00 PM - 6:00 PM",
      description: "Create your own cookie dough flavors and learn the secrets behind our signature recipes",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹750 per person"
    },
    {
      title: "Live Jazz Evening",
      date: "March 29, 2024",
      time: "8:00 PM - 10:00 PM",
      description: "Enjoy smooth jazz music with your favorite coffee and desserts",
      image: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Cover charge: ₹300"
    }
  ];

  const seasonalOffers = [
    {
      title: "Spring Menu Launch",
      description: "Introducing fresh seasonal flavors and limited-time offerings",
      image: "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Mother's Day Special",
      description: "Complimentary dessert for all mothers dining with us",
      image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Offers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't miss out on our special events, seasonal offers, and exclusive experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            <div className="flex pl-16 space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full min-w-max px-4">
              <button className="px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                All Events
              </button>
              <button className="px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Current Offers
              </button>
              <button className="px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Upcoming Events
              </button>
            </div>
          </div>
        </div>

        {/* Current Offers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Current Offers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentOffers.map((offer, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${offer.color} p-8 text-white transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <offer.icon className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                </div>
                <p className="text-lg mb-4">{offer.description}</p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {offer.time}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {offer.validUntil}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 rounded-full p-2">
                  <Gift className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-amber-600 dark:text-amber-400">
                        <Calendar className="h-5 w-5 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-amber-600 dark:text-amber-400">
                        <Clock className="h-5 w-5 mr-2" />
                        {event.time}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {event.price}
                      </span>
                      <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Offers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Seasonal Specials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-lg opacity-90">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter and never miss an offer or event</p>
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;