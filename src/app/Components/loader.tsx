import Image from 'next/image'
import React from 'react'
import load from '../../../public/Infinity-3.8s-200px.svg'

const Loader = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-full bg-gray-200 bg-opacity-50 absolute">
                <Image src={load} alt='Loading' />
                
            </div>
        </>
    )
}

export default Loader;
