import React, { useState, useEffect } from 'react';
import { Coffee, Star, Award, Users,  ArrowDown, Instagram, MapPin, Wifi, Music, ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Cookie Dough Coffee",
      subtitle: "India's First & Only"
    },
    {
      image: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Luxury Café Experience",
      subtitle: "Premium Ambiance"
    },
    {
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Artisanal Coffee",
      subtitle: "Master Crafted"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The cookie dough coffee is absolutely divine! Never tasted anything like it.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Arjun Patel",
      rating: 5,
      text: "Perfect ambiance for work meetings. The artisanal food is exceptional!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "My go-to place for weekend brunches. Love the outdoor seating!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const instagramPosts = [
    "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      {/* New Hero Section with Left Carousel */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 md:pt-28 lg:pt-0 dark:to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            
            {/* Left Side - Image Carousel */}
            <div className="relative order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Carousel Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Slide Info */}
                <div className="absolute bottom-8 left-6 text-white">
                  <p className="text-sm opacity-80">{heroSlides[currentSlide].subtitle}</p>
                  <h3 className="text-xl font-bold">{heroSlides[currentSlide].title}</h3>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ India's #1 Cookie Dough Coffee Experience
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-gray-900 dark:text-white">Welcome to</span>
                <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Fluff Artisan
                </span>
                <span className="block text-gray-700 dark:text-gray-300 text-2xl sm:text-3xl lg:text-4xl font-light">
                  Café
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                India's Only Cookie Dough Coffee Experience
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Indulge in our signature cookie dough coffee blends, artisanal food, and premium café experience in the heart of India.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    View Our Menu
                    <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
                <button className="group border-2 border-amber-500 text-amber-600 dark:text-amber-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Book a Table
                    <MapPin className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                  </span>
                </button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">4.9★</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Signature Drinks</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Premium Experience Section */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              Premium Experience
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200 max-w-3xl mx-auto">
              Discover what makes Fluff Artisan Café the ultimate destination for coffee connoisseurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Award Winning</h3>
              <p className="text-brown-600 dark:text-cream-200">
                Recognized as India's most innovative café concept with multiple culinary awards for our unique cookie dough coffee creations.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Master Crafted</h3>
              <p className="text-brown-600 dark:text-cream-200">
                Every cup is meticulously crafted by our expert baristas using premium beans and our signature cookie dough infusion technique.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Community Focused</h3>
              <p className="text-brown-600 dark:text-cream-200">
                More than a café - we're a community hub where coffee lovers, artists, and entrepreneurs come together to create magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Offerings Section */}
      <section className="py-20 bg-brown-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-6">
                Our Signature Cookie Dough Coffee
              </h2>
              <p className="text-xl text-brown-600 dark:text-cream-200 mb-8">
                Experience the world's first cookie dough infused coffee - a revolutionary blend that combines the comfort of freshly baked cookies with premium coffee excellence.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-brown-700 dark:text-cream-200">Handcrafted cookie dough infusion</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-brown-700 dark:text-cream-200">Premium single-origin coffee beans</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-brown-700 dark:text-cream-200">Artisanal presentation & garnishing</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-gold to-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Try Our Signature Blend
              </button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Cookie Dough Coffee"
                  className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold to-amber-400 text-black px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
                India's Only!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance & Atmosphere Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              Ambiance & Atmosphere
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200 max-w-3xl mx-auto">
              Three distinct spaces designed for every mood and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Indoor Seating"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="w-5 h-5" />
                  <span className="text-sm">Free WiFi</span>
                </div>
                <h3 className="text-xl font-bold">Cozy Indoor</h3>
                <p className="text-sm text-cream-200">Perfect for work & meetings</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Outdoor Seating"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Garden View</span>
                </div>
                <h3 className="text-xl font-bold">Outdoor Terrace</h3>
                <p className="text-sm text-cream-200">Fresh air & natural vibes</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Private Lounge"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-5 h-5" />
                  <span className="text-sm">Live Music</span>
                </div>
                <h3 className="text-xl font-bold">Private Lounge</h3>
                <p className="text-sm text-cream-200">Intimate gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events Section */}
      <section className="py-20 bg-gradient-to-r from-brown-100 to-cream-100 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              Community & Events
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200 max-w-3xl mx-auto">
              Join our vibrant community of coffee lovers and creative minds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 dark:text-cream-100">Coffee Workshops</h3>
                    <p className="text-brown-600 dark:text-cream-200">Every Saturday</p>
                  </div>
                </div>
                <p className="text-brown-600 dark:text-cream-200">
                  Learn the art of coffee making from our master baristas. From bean selection to latte art.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 dark:text-cream-100">Live Music Nights</h3>
                    <p className="text-brown-600 dark:text-cream-200">Friday Evenings</p>
                  </div>
                </div>
                <p className="text-brown-600 dark:text-cream-200">
                  Enjoy acoustic performances by local artists while sipping your favorite cookie dough coffee.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-800 dark:text-cream-100">Networking Events</h3>
                    <p className="text-brown-600 dark:text-cream-200">Monthly</p>
                  </div>
                </div>
                <p className="text-brown-600 dark:text-cream-200">
                  Connect with entrepreneurs, artists, and professionals in our monthly networking gatherings.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Community Events"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                <button className="bg-gradient-to-r from-gold to-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Upcoming Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              Why Choose Fluff Artisan?
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200">
              Experience the difference that makes us India's premier cookie dough café
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Cookie Dough Coffee</h3>
              <p className="text-brown-600 dark:text-cream-200">
                India's first and only cookie dough infused coffee experience. A revolutionary blend that's taking the coffee world by storm.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Artisanal Food</h3>
              <p className="text-brown-600 dark:text-cream-200">
                Handcrafted dishes made with premium ingredients. From gourmet sandwiches to decadent desserts, every bite is perfection.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 dark:text-cream-100 mb-4">Premium Ambiance</h3>
              <p className="text-brown-600 dark:text-cream-200">
                Luxurious interiors, outdoor seating, and a warm atmosphere perfect for work, dates, or catching up with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-brown-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200">
              Join thousands of satisfied customers who've made Fluff Artisan their favorite café
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-brown-800 dark:text-cream-100 font-light italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-brown-800 dark:text-cream-100 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-brown-600 dark:text-cream-200">
                      Verified Customer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gold scale-125' 
                      : 'bg-brown-300 dark:bg-gray-600 hover:bg-brown-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 dark:text-cream-100 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-brown-600 dark:text-cream-200 mb-6">
              Get inspired by our daily coffee artistry and café moments
            </p>
            <div className="flex items-center justify-center gap-2 text-brown-600 dark:text-cream-200">
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">@fluffartisancafe</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={post}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Follow @fluffartisancafe
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;