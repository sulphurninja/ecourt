
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function LawyerCases() {
  return (<>
    <header
      className="flex items-center justify-between bg-white px-6 py-4 shadow-sm dark:bg-gray-950">
      <h1 className="text-lg font-semibold">Welcome Lawyer</h1>
      <div className="flex items-center gap-4">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#">
          View Account
        </Link>
        <Button size="icon" variant="outline">
          <LogOutIcon className="h-5 w-5" />
          <span className="sr-only">Logout</span>
        </Button>
      </div>
    </header>
    <main className="space-y-8 p-6">
      <section>
        <h2 className="mb-4 text-xl font-semibold">No Active Cases</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-6">
              <p>There are currently no active cases.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-semibold">No Pending Cases</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-6">
              <p>There are currently no pending cases.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  </>);
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>)
  );
}
