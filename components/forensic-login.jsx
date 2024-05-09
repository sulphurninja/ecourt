
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ForensicLogin() {
  return (<>
    <header
      className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
      <div className="flex items-center gap-2">
        <ScaleIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Forensic Login</span>
      </div>
    </header>
    <main
      className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your username and password to access the eCourtTM platform.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" />
            </div>
            <Link href='/forensic'>
            <Button className="w-full">Login</Button>
            </Link>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              <Link className="underline underline-offset-2" href="#">
                Forgot Password?
              </Link>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </main>
  </>);
}

function ScaleIcon(props) {
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
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>)
  );
}
