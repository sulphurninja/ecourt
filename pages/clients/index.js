import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React from 'react'

export default function ClientDashboard() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 mt-12'>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to our Legal Services</h1>
          <p
            className="text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Explore our network of experienced lawyers and find the right legal representation for your needs.
          </p>
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#">
              View Accounts
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
