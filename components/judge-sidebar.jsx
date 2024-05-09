
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function JudgeSidebar() {
  return (
    (<div className="flex min-h-screen">
      <div className="hidden w-64 bg-gray-100 p-6 dark:bg-gray-900 md:block">
        <div className="mb-6 text-lg font-bold">Dashboard</div>
        <nav className="space-y-4">

          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="/judge/schedule">
            <CalendarIcon className="h-5 w-5" />
            Schedule
          </Link>
          {/* <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="/judge/records">
            <FileIcon className="h-5 w-5" />
            Records
          </Link> */}
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="/judge/cases">
            <BriefcaseIcon className="h-5 w-5" />
            Active/Pending Cases
          </Link>
        </nav>
      </div>
    </div>)
  );
}

function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function FileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>)
  );
}


function GavelIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
