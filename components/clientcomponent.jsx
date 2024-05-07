import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { postData } from "@/utils/fetchData" // Import your postData function
import { Toaster, toast } from "sonner" // Import toast for notifications
import { useRouter } from "next/router"

export function Clientcomponent() {
  const initialState = { password: '', firstName: '', dob: '', lastName: '', userName: '' }
  const [userData, setUserData] = useState(initialState)
  const router = useRouter();

  const handleChangeInput = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await postData('auth/register', userData)

      if (res.msg === 'Successful Registration!') {
        toast.success('User Registered Successfully! ✅')
        setUserData(initialState)
        router.push('/clients');
      } else {
        toast.error(res.err)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      toast.error('An error occurred during registration.')
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Register for eCourts</h2>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
          Create your account to access the eCourts platform.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              name="firstName"
              onChange={handleChangeInput}
              placeholder="Enter your first name"
              required
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              name="lastName"
              onChange={handleChangeInput}
              placeholder="Enter your last name"
              required
              type="text"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="date-of-birth">Date of Birth</Label>
          <Input
            id="date-of-birth"
            name="dob"
            onChange={handleChangeInput}
            placeholder="Enter your date of birth"
            required
            type="date"
          />
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="userName"
            onChange={handleChangeInput}
            placeholder="Enter your username"
            required
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            onChange={handleChangeInput}
            placeholder="Enter your password"
            required
            type="password"
          />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
