import { LawyerCheck } from '@/components/lawyer-check'
import { LawyerSidebar } from '@/components/lawyer-sidebar'
import React from 'react'

export default function check() {
  return (
    <div  className='flex'>
        <LawyerSidebar />
        <div className='flex-1 '> 
        <LawyerCheck/>

        </div>
    
</div>
  )
}
