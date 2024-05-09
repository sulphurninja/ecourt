import { LawyerSchedule } from '@/components/lawyer-schedule'
import { LawyerSidebar } from '@/components/lawyer-sidebar'
import React from 'react'

export default function schedule() {
  return (
    <div  className='flex'>
        <LawyerSidebar />
        <div className='flex-1 '> 
        <LawyerSchedule/>

        </div>
    
</div>
  )
}
