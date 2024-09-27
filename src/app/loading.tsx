import React from 'react'

export default function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-red-400'>
            <div className='w-10 h-10 bg-red-100 rounded-full animate-spin'></div>
        </div>
    )
}
