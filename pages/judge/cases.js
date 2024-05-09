import { JudgeCases } from '@/components/cases'
import { JudgeSidebar } from '@/components/judge-sidebar'
import React from 'react'

export default function cases() {
  return (
    <div className='flex'>
      <JudgeSidebar />
      <div className='flex-1 '>
        <JudgeCases />

      </div>

    </div>
  )
}
