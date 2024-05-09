
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { DataContext } from "@/store/GlobalState"
import { useRouter } from "next/router"
import { Scale } from "lucide-react"
import { postData } from "@/utils/fetchData"
import Cookie from "js-cookie"
import { Toaster, toast } from "sonner"

export function LawyerLogin() {
  const initialState = { userName: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const [error, setError] = useState(false);
  const { userName, password } = userData;
  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleSubmit = async e => {
    e.preventDefault()

    const res = await postData('auth/login', userData)

    if (res.error) {
      window.location.reload();
      return;
    }

    dispatch({
      type: 'AUTH', payload: {
        token: res.access_token,
        user: res.user
      }
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: '/api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
    // check if user has admin privileges
    if (res.user) {
      toast("🙏 Welcome Lawyer!");
      router.push("/lawyers"); // Redirect to admin page
    }
  }

  return (
    (<div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Toaster />
      <div
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mb-6">
          <Scale />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">Welcome Back Lawyer</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label className="block mb-1 dark:text-gray-300" htmlFor="username">
              Username
            </Label>
            <Input name="userName"
              value={userName} onChange={handleChangeInput} type="text" id="userName" placeholder="Enter your username" required />
          </div>
          <div>
            <Label className="block mb-1 dark:text-gray-300" htmlFor="password">
              Password
            </Label>
            <Input name="password" onChange={handleChangeInput} value={password} id="password" placeholder="Enter your password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <p className="mt-4"> New to eCourtroom?
          <Link href="clients/register">
            <span className="text-blue-500"> Register now!</span>
          </Link>
        </p>
      </div>
    </div>)
  );
}

function GavelIcon(props) {
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
      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>)
  );
}
