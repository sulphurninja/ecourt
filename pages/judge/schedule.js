import { JudgeSchedule } from '@/components/judge-schedule'
import { JudgeSidebar } from '@/components/judge-sidebar'
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function schedule() {
  return (
    <div  className='flex'>
        <JudgeSidebar />
        <div className='flex-1 '> 
        <JudgeSchedule/>

        </div>
    
</div>
  )
}
