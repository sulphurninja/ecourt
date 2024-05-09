import Navbar from '@/components/Navbar'
import { ForensicSidebar } from '@/components/forensic-sidebar'
import React from 'react'

export default function sidebar() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
      <ForensicSidebar />
      <main className="flex-1 p-4  md:p-6" >Welcome to Forensic Dashboard</main>

      </div>

    </div>
  )
}
