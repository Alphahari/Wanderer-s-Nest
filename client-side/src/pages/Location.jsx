import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Star, X } from "lucide-react";

import destinations from '../data/destinations';
import stateTouristSpots from '../data/stateTouristSpots';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, selectIsLoading, selectToken, selectUserData } from '../redux/tokenManager/tokens';

import LocalsForm from '../components/LocalsForm';
import { ToastContainer } from 'react-toastify';
import { fetchAllExperiences, selectAllExperiences, selectExperiencesLoading } from '../redux/Experience/experienceSlice';

const Location = () => {
  const { locationName } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectIsLoading);
  const [showModal, setShowModal] = useState(false);

  const experiences = useSelector(selectAllExperiences);
  const experiencesLoading = useSelector(selectExperiencesLoading);

  const filteredExperiences = experiences.filter(exp => 
    exp.state.toLowerCase() === locationName.toLowerCase()
  );

  useEffect(() => {
    dispatch(fetchAllExperiences());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [token, dispatch]);
  console.log(userData)

  const focusOnAllLocations = useRef(null);
  const handleScroll = () => {
    focusOnAllLocations.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedState = destinations.find(
    dest => dest.name.toLowerCase().replace(/\s+/g, '-') === locationName.toLowerCase()
  );
  const touristSpots = stateTouristSpots[locationName.toLowerCase()] || [];

  if (!selectedState) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Location not found</h1>
          <p className="text-xl text-gray-600 mb-6">
            The state you're looking for doesn't exist in our database.
          </p>
          <Link
            to="/"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading user data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <ToastContainer />
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{selectedState.name}</h1>
            <div className="flex items-center justify-center text-white/90">
              <MapPin className="h-5 w-5 mr-1" />
              <span>India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* State Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={selectedState.image}
                alt={selectedState.name}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About {selectedState.name}</h2>
              <p className="text-lg text-gray-700 mb-6">{selectedState.description}</p>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">Best time to visit: {selectedState.bestTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tourist Spots Section */}
        <div className="mb-16" ref={focusOnAllLocations}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Destinations in {selectedState.name}</h2>

          {touristSpots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {touristSpots.map((spot) => (
                <div key={spot.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group relative">
                  {/* Badges */}
                  {spot.isFamous && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Famous
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{spot.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{spot.description}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <div className="text-sm">{spot.location}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <div className="text-sm">{spot.bestTime}</div>
                      </div>
                      {spot.isLocalPick && (
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                          View Details
                        </button>)
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-amber-50 rounded-xl">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No tourist spots found</h3>
              <p className="text-gray-500">We're currently gathering information about this state.</p>
            </div>
          )}
        </div>

        {/* Local Experiences Section */}
        {filteredExperiences.length > 0 && (
          <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Experiences</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover authentic activities hosted by locals in {selectedState.name}
              </p>
            </div>

            {experiencesLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredExperiences.map((exp) => (
                  <div key={exp._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-40 overflow-hidden rounded-t-lg mb-4">
                      <img
                        src={exp.imageURL || "Wanderers-Nest-Logo.png"}
                        alt={exp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{exp.name}</h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">{exp.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Best time: {exp.bestTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        {!isLoading && !userData.Local && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to explore {selectedState.name}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book your next adventure with authentic local experiences.
            </p>
            <button onClick={handleScroll} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Browse All Experiences
            </button>
          </div>
        )}

        {/* local add experiences form */}
        {!isLoading && userData?.Local && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Experience At {selectedState.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help Tourists Explore New Places with less crowd and more state culture
            </p>
            <button onClick={() => setShowModal(true)} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Add
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4 max-h-[80vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Add New Experience
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <LocalsForm
              setShowModal={setShowModal}
              locationName={locationName}
              userData={userData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;