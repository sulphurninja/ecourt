import { JudgeRecords } from '@/components/judge-records'
import { JudgeSidebar } from '@/components/judge-sidebar'
import React from 'react'

export default function records() {
  return (
    <div  className='flex'>
        <JudgeSidebar />
        <div className='flex-1 '> 
        <JudgeRecords/>

        </div>
    
</div>
  )
}
