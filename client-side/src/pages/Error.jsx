import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div className='min-h-[67vh]  flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Error 404</h1>
            <h2 className='text-2xl font-semibold'>Page Not Found</h2>
            <button className='bg-emerald-700 m-3 p-2 border rounded-md'><NavLink to="/">Go to Home Page</NavLink></button>
        </div>
    )
}

export default Error
