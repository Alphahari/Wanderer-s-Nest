import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, selectToken, selectUserData } from '../redux/tokenManager/tokens';
import { fetchAllExperiences, selectAllExperiences, selectExperiencesLoading } from '../redux/Experience/experienceSlice';
import { Calendar, MapPin, Delete } from "lucide-react";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const ManageReviews = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const userData = useSelector(selectUserData);
    const experiences = useSelector(selectAllExperiences);
    const experiencesLoading = useSelector(selectExperiencesLoading);

    useEffect(() => {
        dispatch(fetchAllExperiences());
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(fetchUserData());
        }
    }, [token, dispatch]);

    const deleteReview = async (experience) => {
        if (!window.confirm('Are you sure you want to delete this experience?')) {
            return;
        }

        try {
            const response = await fetch(import.meta.env.VITE_DELETE_API_EXPERIENCES, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: experience._id })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete experience');
            }

            dispatch(fetchAllExperiences());
            toast.success("Deleted Successfully");
        } catch (error) {
            console.error('Error deleting experience:', error);
            toast.error(error.message || 'Failed to delete experience');
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            {!userData?.message?.isAdmin && (
                <div className="text-center mb-2 min-h-[67vh] flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Error 404</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        This page is Not permitted by the user
                    </p>
                    <Link to="/" className='p-4'>
                        <button className='rounded-md w-60 h-8 bg-amber-600'>Go Back To Home Page</button>
                    </Link>
                </div>
            )}
            {experiences.length > 0 && userData?.message?.isAdmin && (
                <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Experiences</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Manage reviews
                        </p>
                    </div>

                    {experiencesLoading ? (
                        <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {experiences.map((exp) => (
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
                                        <span>{exp.location},{exp.state}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-1">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span>Best time: {exp.bestTime}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-1">
                                        <button 
                                            className="flex items-center text-white text-sm mt-1 p-1 rounded-md bg-red-600 hover:bg-red-700 transition-colors"
                                            onClick={() => deleteReview(exp)}
                                        >
                                            <Delete className="h-4 w-4 mr-1" />
                                            <span>Delete This Review</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ManageReviews;