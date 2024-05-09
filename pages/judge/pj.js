import { JudgePJ } from '@/components/judge-pj'
import { JudgeSidebar } from '@/components/judge-sidebar'
import React from 'react'

export default function pj() {
  return (
    <div  className='flex'>
        <JudgeSidebar />
        <div className='flex-1 '> 
        <JudgePJ/>

        </div>
    
</div>
  )
}
