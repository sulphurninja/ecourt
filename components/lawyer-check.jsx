
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LawyerCheck() {
  return (<>
    <header
      className="flex items-center justify-between bg-white px-6 py-4 text-gray-900 border-b border-gray-200">
      <h1 className="text-2xl font-bold">Welcome Lawyer</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline">View Account</Button>
        <Button>Logout</Button>
      </div>
    </header>
    <section className="container mx-auto my-8 px-4 md:px-6">
      <div
        className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <div className="text-lg font-medium">Check for details</div>
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input className="flex-1" placeholder="Enter CNR numbers" type="text" />
          <Button>Submit</Button>
        </div>
      </div>
    </section>
  </>);
}
