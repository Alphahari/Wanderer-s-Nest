import React from 'react'
import {  Globe, Users, Heart, Shield } from "lucide-react"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden bg-[url('/about-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">About Wanderer's Nest</h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto">
              Bridging cultures through authentic travel experiences
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Wanderer's Nest is revolutionizing travel by fostering genuine connections between tourists and local communities.
            We empower locals to become cultural ambassadors while giving travelers access to authentic, off-the-beaten-path experiences.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Globe className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Authentic Experiences</h3>
            <p className="text-gray-600 text-center">
              Discover hidden gems and cultural treasures you won't find in guidebooks, curated by locals who know their community best.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Cultural Exchange</h3>
            <p className="text-gray-600 text-center">
              Build meaningful connections that transcend typical tourist interactions and gain true insight into local ways of life.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Sustainable Tourism</h3>
            <p className="text-gray-600 text-center">
              Support local economies directly while helping preserve cultural heritage and natural environments.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[url('/how-it-works.jpg')] bg-cover bg-center min-h-[400px]">
            <img src="Wanderers-Nest-Logo.png" className='border rounded-full w-3/5 p-2 ml-40'></img>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Wanderer's Nest Works</h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Locals Share Their Knowledge</h3>
                    <p className="text-gray-600 mt-1">
                      Community members create profiles showcasing their unique offerings - from neighborhood tours to cultural workshops.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Travelers Discover Authentic Experiences</h3>
                    <p className="text-gray-600 mt-1">
                      Browse and book experiences that match your interests, with transparent reviews from fellow travelers.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Meaningful Connections Form</h3>
                    <p className="text-gray-600 mt-1">
                      Enjoy personalized interactions that create lasting memories and mutual understanding between cultures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Community Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Local Guides Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Authentic Experiences Shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Positive Traveler Feedback</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Travel Differently?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community of curious travelers and passionate locals today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Browse Experiences
              </button>
            </Link>
            <Link to="/registerAsLocal">
              <button className="bg-white hover:bg-gray-100 text-amber-600 border border-amber-500 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Become a Local Guide
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About