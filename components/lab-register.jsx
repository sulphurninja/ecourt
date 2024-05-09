
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { postData } from "@/utils/fetchData";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
export function LabRegister() {

  const initialState = { password: '', labName: '', labID: '' }
  const [userData, setUserData] = useState(initialState)
  const router = useRouter();

  const handleChangeInput = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await postData('auth/registerLab', userData)

      if (res.msg === 'Successful Registration!') {
        toast.success('Lab Registered Successfully! ✅')
        setUserData(initialState)
        router.push('/forensic');
      } else {
        toast.error(res.err)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      toast.error('An error occurred during registration.')
    }
  }

  return (
    (<div className="mx-auto max-w-md space-y-6 py-12">
      <Toaster />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register Your Forensic Lab</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign up your forensic lab to access the eCourts platform.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="lab-name">Lab Name</Label>
          <Input id="lab-name" name="labName"
            onChange={handleChangeInput} placeholder="lab name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lab-id">Lab ID</Label>
          <Input id="lab-id" name="labID" onChange={handleChangeInput} placeholder="Enter your lab ID" required />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
        <p>Already an user?
          <Link href='/forensic/login'>
            <span className="text-blue-500"> Login Now!</span>

          </Link>
        </p>
      </form>
    </div>)
  );
}
