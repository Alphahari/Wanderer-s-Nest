import React from 'react'
import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, selectToken, selectUserData } from '../redux/tokenManager/tokens';
import destinations from '../data/Destinations';
import carouselImages from '../data/CarouselImages';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const isLoggedIn = Boolean(token);
  const [currentSlide, setCurrentSlide] = useState(0)
  const destinationsRef = useRef(null);

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [])

  const handleScroll = () => {
    destinationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselImages.length])
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="relative h-[70vh] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="container mx-auto px-4 pb-16">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">{image.caption}</h2>
                <button onClick={handleScroll} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {isLoggedIn && userData && (
        <p className="font-semibold text-3xl flex justify-center items-center">
          Welcome {userData?.message?.username}
        </p>
      )}
      {/* Main Content - Destinations */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Incredible India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore these 10 breathtaking states that showcase India's rich cultural heritage, diverse landscapes,
            and unforgettable experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div ref={destinationsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <div className={`${!isLoggedIn ? "blur-sm pointer-events-none" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <div className="text-sm">Best time: {destination.bestTime}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <div className="text-sm font-medium">View on map</div>
                    </div>
                    <button
                      onClick={() => navigate(`/location/${createSlug(destination.name)}`)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
                {!isLoggedIn && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg z-20">
                    <img src='folder-security.png' className='w-8 h-8'></img>
                    <p className="text-gray-800 font-medium">Log in to view details</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
