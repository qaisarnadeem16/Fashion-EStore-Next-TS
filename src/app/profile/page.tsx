'use client'
import React from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const page = () => {
  const router=useRouter()
  const handleLogout=async()=>{
    try {
      await axios.get('/api/user/logout')
      toast.success('Logout successful')
      router.push('/login')
  } catch (error:any) {
      toast.error(error.response.data.error)
  }

  }
  return (
    <div>
      profile
      <div className="mx-auto flex gap-4 justify-center">
        <Link className='bg-blue-500 p-4 rounded-lg' href='/signup'>Sign Up </Link>
        <div className='bg-red-500 p-4 rounded-lg'  onClick={handleLogout}>Logout</div>
      </div>
    </div>
  )
}

export default page
