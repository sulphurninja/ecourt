import { LawyerSidebar } from '@/components/lawyer-sidebar'
import { LawyersReq } from '@/components/lawyers-req'
import React from 'react'

export default function request() {
  return (
    <div  className='flex'>
    <LawyerSidebar />
    <div className='flex-1 '> 
    <LawyersReq/>

    </div>

</div>
  )
}
