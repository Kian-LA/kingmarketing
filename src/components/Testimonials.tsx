import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Pro',
      company: 'TechStart Pro',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "KingMarketing completely transformed our business. We went from struggling to get leads to having more qualified prospects than we can handle. Their team is incredible!",
      text: "Logical Marketing completely transformed our business. We went from struggling to get leads to having more qualified prospects than we can handle. Their team is incredible!",
      results: '340% increase in conversions'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoShop',
      company: 'EcoShop',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The ROI we've seen from working with KingMarketing is unbelievable. They helped us scale from $100K to over $1M monthly revenue in just 8 months.",
      text: "The ROI we've seen from working with Logical Marketing is unbelievable. They helped us scale from $100K to over $1M monthly revenue in just 8 months.",
      results: '$1.2M monthly revenue achieved'
    },
    {
      name: 'Dr. Amanda Rodriguez',
      position: 'Director, MedCare Plus',
      company: 'MedCare Plus',
      image: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Professional, results-driven, and always available when we need them. Our patient bookings have increased by 280% since we started working together.",
      text: "Professional, results-driven, and always available when we need them. Our patient bookings have increased by 280% since we started working together.",
      results: '280% more patient bookings'
    },
    {
      name: 'David Kim',
      position: 'CMO, FitnessPro',
      company: 'FitnessPro',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "KingMarketing doesn't just run ads - they understand our business and create strategies that actually work. Best marketing investment we've ever made.",
      text: "Logical Marketing doesn't just run ads - they understand our business and create strategies that actually work. Best marketing investment we've ever made.",
      results: '5x return on ad spend'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients 
            <span className="text-red-500"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners like you have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white text-gray-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <Quote className="w-12 h-12 text-red-600 mb-6" />
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <p className="text-xl lg:text-2xl leading-relaxed mb-6 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg inline-block font-semibold mb-6">
                  {testimonials[currentTestimonial].results}
                </div>

                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                  <p className="text-red-600 font-semibold">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-red-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">$50M+</div>
            <div className="text-gray-300">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;