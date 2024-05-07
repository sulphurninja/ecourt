import { HireClient } from '@/components/hire-client'
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function hireLawyer() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
<HireClient/>
        </div>
    </div>
  )
}
