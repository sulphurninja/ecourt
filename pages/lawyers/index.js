import { LawyerSidebar } from '@/components/lawyer-sidebar'
import React from 'react'

export default function index() {
  return (
    <div className='flex'>
      <LawyerSidebar />
      <div className='flex-1 p-6'>
        <h1 className='text-primary'>
          Client Requests
        </h1>
      </div>
    </div>
  )
}
