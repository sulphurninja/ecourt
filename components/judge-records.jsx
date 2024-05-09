
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function JudgeRecords() {
  return (
    (<div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Search for Details and Selectors</h1>
      </div>
      <form className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="lawyer-id">Search Lawyer ID</Label>
          <Input id="lawyer-id" placeholder="Enter Lawyer ID" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="civilian-id">Search Civilian ID</Label>
          <Input id="civilian-id" placeholder="Enter Civilian ID" />
        </div>
        <Button className="w-full" type="submit">
          Search
        </Button>
      </form>
    </div>)
  );
}
