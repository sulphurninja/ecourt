
import { Button } from "@/components/ui/button"

export function LawyerSchedule() {
  return (<>
    <header
      className="flex items-center justify-between px-6 py-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-xl font-bold">Welcome Lawyer</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline">View Account</Button>
        <Button>Logout</Button>
      </div>
    </header>
    <section className="bg-gray-100 px-6 py-8 text-center dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Nothing to do today, have fun</h2>
    </section>
  </>);
}
