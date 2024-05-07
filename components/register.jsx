
import Link from "next/link"

export function Register() {
  return (
    (<section
      className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="max-w-3xl w-full px-6 py-12 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center space-y-4">
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Register Your Role</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Select the option that best describes your role in the legal system.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <Link
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 transition-colors"
            href="/clientRegister">
            <UserIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Client</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Register as a client seeking legal services.</p>
          </Link>
          <Link
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 transition-colors"
            href="/lawyerregister">
            <BriefcaseIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Lawyer</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Register as a practicing lawyer.</p>
          </Link>
          <Link
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 transition-colors"
            href="/labregister">
            <BuildingIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Law Firm</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Register as a law firm.</p>
          </Link>
          <Link
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 transition-colors"
            href="/judgeregister">
            <GavelIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Judge</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Register as a judge or judicial officer.</p>
          </Link>
        </div>
      </div>
    </section>)
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


function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
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


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
