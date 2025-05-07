import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Mail, Phone, MapPin, MessageSquare, User } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, selectToken, selectUserData } from '../redux/tokenManager/tokens';
import { ToastContainer, toast } from 'react-toastify';

const ContactHelp = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm()
  
  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [])

  useEffect(() => {
    if (userData) {
      setValue('name', userData?.message?.username || '');
      setValue('email', userData?.message?.email || '');
    }
  }, [userData, setValue])

  console.log(userData)

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        reset();
      }
    } catch (error) {
      console.log("login", error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-cover bg-center h-64 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">We're Here to Help</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our friendly support team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Mail className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <a
              href="mailto:support@wanderersnest.com"
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              support@wanderersnest.com
            </a>
            <p className="text-sm text-gray-500 mt-2">Typically responds within 24 hours</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">For urgent assistance</p>
            <a
              href="tel:+18005551234"
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              +91 3768810101
            </a>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-5pm EST</p>
          </div>

          {/* Visit Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our headquarters</p>
            <p className="text-gray-700">
              123 Travel Lane<br />
              Wanderer City, WC 10001
            </p>
            <p className="text-sm text-gray-500 mt-2">By appointment only</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[url('/Wanderers-Nest-Logo.png')] bg-cover bg-center min-h-[400px] hidden md:block"></div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register('name', {
                        required: 'Name is required',
                      })}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register('email', {
                        required: 'Email is required'
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    defaultValue=""
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Account Support">Account Support</option>
                    <option value="Technical Issues">Technical Issues</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      placeholder="How can we help you?"
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I create an account?</h3>
              <p className="text-gray-600">
                You can create an account by clicking on the "Sign Up" button in the top right corner of our website.
                Choose whether you're registering as a traveler or local guide, then fill out the required information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express) for bookings
                and experience payments. Local guides receive payments through secure bank transfers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How can I become a local guide?</h3>
              <p className="text-gray-600">
                To become a local guide, register with us and select "Register as Local" option. You'll need to provide
                information about your location, expertise, and the experiences you'd like to offer. Our team will review
                your application within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHelp