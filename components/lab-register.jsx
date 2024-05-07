
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LabRegister() {
  return (
    (<div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register Your Forensic Lab</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign up your forensic lab to access the eCourts platform.</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="lab-name">Lab Name</Label>
          <Input id="lab-name" placeholder="Enter your lab name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lab-id">Lab ID</Label>
          <Input id="lab-id" placeholder="Enter your lab ID" required />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </div>)
  );
}
