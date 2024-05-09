import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { DataContext } from '@/store/GlobalState';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';

export function HireClient() {
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null); // State to store the selected lawyer
  const [userName, setUserName] = useState("");
  const [userID, setuserID] = useState();
  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const [userDetails, setuserDetails] = useState();

  useEffect(() => {
    if (auth && auth.user && auth.user.userName) {
      // Update state and localStorage when user is authenticated
      setUserName(auth.user.userName);
      localStorage.setItem("userName", auth.user.userName);
    }
  }, [auth]);

  // console.log(auth.user)


  // Fetch lawyers from the API on component mount
  useEffect(() => {
    async function fetchLawyers() {
      try {
        const response = await axios.get('/api/getLawyers');
        setLawyers(response.data.data); // Assuming response.data.data contains the array of lawyers
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      }
    }

    fetchLawyers();
  }, []);


  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`/api/getUser?userName=${userName}`);
        setuserDetails(response.data.data); // Assuming response.data.data contains the array of lawyers\
        const userID = userDetails.map((user) => user._id);
        setuserID(userID);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUser();
  }, []);

  // console.log(userDetails.map((user)=>user._id), 'user detais')

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send request to the API to create a new request
      const response = await axios.post('/api/sendRequest', { userName, lawyer: selectedLawyer }); // Replace '<user_id>' with the actual user ID
      console.log('Request sent:', response.data.data);
      toast.success('Request Sent Successfully')
      // You can add further handling here, such as displaying a success message to the user
    } catch (error) {
      console.error('Error sending request:', error);
      // You can add further error handling here, such as displaying an error message to the user
    }
  };

  // console.log(auth?.user.userName, 'auth')

  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12 md:py-12">

      <Toaster />
      <section className="w-full max-w-5xl space-y-6">
        <h1>Hi, {userName}</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Current Lawyers</h2>
          <p className="text-gray-500 dark:text-gray-400">Meet our network of experienced lawyers.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map(lawyer => (
            <Card key={lawyer._id}>
              <CardHeader>
                <CardTitle>{lawyer.firstName}{" "}{lawyer.lastName}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Specialization: {lawyer.SpecializationArea}</CardDescription>
                <CardDescription>Education: {lawyer.education}</CardDescription>
                <CardDescription>Year of passing: {lawyer.yearofPassing}</CardDescription>
                {/* Add more details as needed */}
                <button
                  className={` p-2 text-white rounded-md mt-4 ${selectedLawyer === lawyer._id ? 'bg-green-500' : 'bg-black'}`}
                  onClick={() => setSelectedLawyer(lawyer._id)}
                  disabled={selectedLawyer === lawyer._id} // Disable the button if the lawyer is already selected
                >
                  {selectedLawyer === lawyer._id ? 'Selected' : 'Select'} {/* Conditionally render button text */}
                </button>
              </CardContent>
            </Card>
          ))}

        </div>
        <section className='bg-black text-white -200 p-6 rounded-md'>

          <form onSubmit={handleFormSubmit}>
            {/* Display the selected lawyer */}
            {selectedLawyer && <p className='text-green-200'> Lawyer Selected</p>}
            {/* Add a submit button to send the request */}
            <button className='bg-green-500 rounded-md flex px-4 py-2' type="submit" disabled={!selectedLawyer}>Send Request</button>
          </form>
        </section>
      </section>
    </main>
  );
}
