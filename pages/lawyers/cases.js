import { LawyerCases } from '@/components/lawyer-cases'
import { LawyerSidebar } from '@/components/lawyer-sidebar'
import React from 'react'

export default function cases() {
  return (
    <div  className='flex'>
        <LawyerSidebar />
        <div className='flex-1 '> 
        <LawyerCases/>

        </div>
    
</div>
  )
}
