
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export function HireClient() {
  return (
    (<main
      className="flex flex-col items-center justify-center gap-8 py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to our Legal Services</h1>
        <p
          className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Explore our network of experienced lawyers and find the right legal representation for your needs.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
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
      <section className="w-full max-w-5xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Current Lawyers</h2>
          <p className="text-gray-500 dark:text-gray-400">Meet our network of experienced lawyers.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Lawyer ID: 123456</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Education Profile</p>
                  <p className="text-gray-500 dark:text-gray-400">LLB, LLM, PhD</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Specialisation Area</p>
                  <p className="text-gray-500 dark:text-gray-400">Civil, Corporate</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">AIBE Number</p>
                  <p className="text-gray-500 dark:text-gray-400">ABC123</p>
                </div>
                <div>
                  <p className="text-sm font-medium">License Status</p>
                  <p className="text-gray-500 dark:text-gray-400">Active</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Firm ID</p>
                  <p className="text-gray-500 dark:text-gray-400">XYZ789</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Rating</p>
                  <p className="text-gray-500 dark:text-gray-400">4.8/5</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Fees Range</p>
                <p className="text-gray-500 dark:text-gray-400">$100 - $500</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
              <CardDescription>Lawyer ID: 654321</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Education Profile</p>
                  <p className="text-gray-500 dark:text-gray-400">LLB, LLM</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Specialisation Area</p>
                  <p className="text-gray-500 dark:text-gray-400">Criminal, Family</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">AIBE Number</p>
                  <p className="text-gray-500 dark:text-gray-400">DEF456</p>
                </div>
                <div>
                  <p className="text-sm font-medium">License Status</p>
                  <p className="text-gray-500 dark:text-gray-400">Active</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Firm ID</p>
                  <p className="text-gray-500 dark:text-gray-400">PQR789</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Rating</p>
                  <p className="text-gray-500 dark:text-gray-400">4.6/5</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Fees Range</p>
                <p className="text-gray-500 dark:text-gray-400">$150 - $600</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Michael Johnson</CardTitle>
              <CardDescription>Lawyer ID: 789012</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Education Profile</p>
                  <p className="text-gray-500 dark:text-gray-400">LLB, LLM</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Specialisation Area</p>
                  <p className="text-gray-500 dark:text-gray-400">Corporate, Intellectual Property</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">AIBE Number</p>
                  <p className="text-gray-500 dark:text-gray-400">GHI789</p>
                </div>
                <div>
                  <p className="text-sm font-medium">License Status</p>
                  <p className="text-gray-500 dark:text-gray-400">Active</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Firm ID</p>
                  <p className="text-gray-500 dark:text-gray-400">STU456</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Rating</p>
                  <p className="text-gray-500 dark:text-gray-400">4.9/5</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Fees Range</p>
                <p className="text-gray-500 dark:text-gray-400">$200 - $800</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full max-w-5xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Search for Lawyers</h2>
          <p className="text-gray-500 dark:text-gray-400">Find the right legal representation for your needs.</p>
        </div>
        <form className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 space-y-2">
            <Label htmlFor="practice-area">Practice Area</Label>
            <RadioGroup>
              <RadioGroupItem id="practice-area-civil" value="civil">
                Civil
              </RadioGroupItem>
              <RadioGroupItem id="practice-area-criminal" value="criminal">
                Criminal
              </RadioGroupItem>
            </RadioGroup>
          </div>
          <Button className="h-10 sm:w-auto" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </main>)
  );
}
