import React from 'react';
import { Users, Coffee, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Coffee, label: 'Cups Served', value: '50,000+' },
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Heart, label: 'Years of Love', value: '5+' },
    { icon: Award, label: 'Awards Won', value: '15+' }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Born from passion, crafted with love, served with pride
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Fluff Artisan Café Interior"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Beginning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Established in 2020, Fluff Artisan Café was born from a simple yet revolutionary idea: 
              what if we could combine the comfort of cookie dough with the sophistication of artisanal coffee? 
              Our founders, passionate food enthusiasts and coffee connoisseurs, embarked on a journey to create 
              India's first and only cookie dough specialty coffee experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              After months of experimentation and countless tastings, we perfected our signature cookie dough 
              coffee blend that would become the heart of our café. Each cup tells a story of dedication, 
              craftsmanship, and the pursuit of culinary excellence.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              At Fluff Artisan Café, we believe that exceptional food and coffee should be an experience, 
              not just a meal. Every ingredient is carefully sourced, every recipe meticulously crafted, 
              and every dish presented with artistic flair.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Our commitment extends beyond just great taste. We focus on sustainable practices, 
              supporting local suppliers, and creating a warm, welcoming atmosphere where memories are made 
              and friendships flourish over great food and exceptional coffee.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                A Note from Our Founder
              </h2>
              <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic leading-relaxed">
                "When we opened Fluff Artisan Café, our vision was simple yet ambitious: to create a space 
                where innovation meets tradition, where every sip and bite tells a story of passion and 
                craftsmanship. Today, seeing families gather, friends reconnect, and new relationships bloom 
                in our café fills my heart with immense joy. This is more than a business—it's a labor of love, 
                a community gathering place, and a testament to the power of following your passion."
              </blockquote>
              <div className="mt-6">
                <div className="font-bold text-gray-900 dark:text-white">Arjun Malhotra</div>
                <div className="text-amber-600 dark:text-amber-400">Founder & Head Chef</div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The passionate people behind your perfect cup
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="text-center">
                <img 
                
                  src={`https://images.pexels.com/photos/118153${member}/pexels-photo-118153${member}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                  alt="Team Member"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Team Member {member}
                </h3>
                <p className="text-amber-600 dark:text-amber-400">Coffee Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;