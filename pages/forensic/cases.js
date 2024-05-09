import Navbar from '@/components/Navbar'
import { LabCases } from '@/components/cases-lab'
import { ForensicSidebar } from '@/components/forensic-sidebar'
import React from 'react'

export default function sidebar() {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <ForensicSidebar />
                <div className=''>
                 
                    <LabCases />

                </div>
            </div>
        </div>
    )
}
