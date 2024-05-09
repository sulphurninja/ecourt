
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function JudgeLogin() {
  return (
    (<div
      className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center">
          <img
            alt="eCourt"
            className="h-auto w-full"
            height={50}
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/50",
              objectFit: "cover",
            }}
            width={150} />
        </div>
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome to eCourt</CardTitle>
            <CardDescription>Please enter your username and password to login.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm underline" href="#">
                  Forgot Password?
                </Link>
              </div>
              <Input id="password" placeholder="Enter your password" type="password" />
            </div>
            <Link href='/judge'>
            <Button className="w-full" type="submit">
              Login
            </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}
