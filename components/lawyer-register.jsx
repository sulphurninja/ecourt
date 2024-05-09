
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"
import { postData } from "@/utils/fetchData"

export function LawyerRegister() {
  const initialState = { password: '', firstName: '', education: '', lastName: '', userName: '', SpecializationArea: '', yearofPassing: '' }
  const [userData, setUserData] = useState(initialState)
  const router = useRouter();

  const handleChangeInput = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await postData('auth/registerLawyer', userData)

      if (res.msg === 'Successful Registration!') {
        toast.success('User Registered Successfully! ✅')
        setUserData(initialState)
        router.push('/lawyers');
      } else {
        toast.error(res.err)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      toast.error('An error occurred during registration.')
    }
  }

  return (
    (<div className="mx-auto max-w-md space-y-6">
      <Toaster />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register for eCourts</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign up to access our legal platform.</p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" name="firstName"
              onChange={handleChangeInput} placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" name="lastName"
              onChange={handleChangeInput} placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="educational-profile">Educational Profile</Label>
          <Input name="education"
            onChange={handleChangeInput} id="educational-profile" placeholder="LLB, LLM" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialization-area">Specialization Area</Label>
          <Select name="SpecializationArea"
            onChange={handleChangeInput} id="specialization-area" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="civil">Civil</SelectItem>
              <SelectItem value="criminal">Criminal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="aibe-year">AIBE Year of Passing</Label>
          <Input name="yearofPassing"
            onChange={handleChangeInput} id="aibe-year" placeholder="2022" required type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="license-status">License Status</Label>
          <Select id="license-status" required>
            <SelectTrigger>
              <SelectValue placeholder="Select License Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input name="userName"
            onChange={handleChangeInput} id="username" placeholder="johndoe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password"
            onChange={handleChangeInput} id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
      <p>Already an user?
        <Link href='/lawyers/login'>
          <span className="text-blue-500"> Login Now!</span>

        </Link>
      </p>

    </div >)
  );
}
