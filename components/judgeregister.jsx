
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"

export function JudgeRegister() {
  return (
    (<div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register as a Judge</h1>
        <p className="text-gray-500 dark:text-gray-400">Join the eCourts platform as a judge.</p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="Enter your first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Enter your last name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="recruitment">Source of Recruitment</Label>
            <Select id="recruitment">
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="merit">Merit Selection</SelectItem>
                <SelectItem value="appointment">Appointment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full justify-start text-left font-normal" variant="outline">
                  <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                  Select date
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar initialFocus mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" required type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
      <p>Already an user? 
        <Link href='/judge/login'>
        <span className="text-blue-500"> Login Now!</span>

        </Link>
        </p>
    </div>)
  );
}

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>)
  );
}
