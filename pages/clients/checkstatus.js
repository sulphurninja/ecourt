import Sidebar from '@/components/sidebar'
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { DataContext } from '@/store/GlobalState';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

export default function checkstatus() {

  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null); // State to store the selected lawyer
  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const [userName, setUserName] = useState(auth?.user?.userName || "");
  const [userID, setuserID] = useState();

  const [userDetails, setuserDetails] = useState();
  const [userCases, setUserCases] = useState([]);


  useEffect(() => {
    if (auth && auth.user && auth.user.userName) {
      // Update state and localStorage when user is authenticated
      setUserName(auth.user.userName);
      localStorage.setItem("userName", auth.user.userName);
    }
  }, [auth]);

  // console.log(auth.user)
  useEffect(() => {
    async function fetchCases() {
      try {
        const response = await axios.get(`/api/getCaseByUserName?userName=${userName}`);
        setUserCases(response.data.data);
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    }

    fetchCases();
  }, [auth]);

  console.log(userCases, 'case')

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

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6'>
        Check status

        <div>
          {userCases.map((caseItem, index) => (
            <Card key={index} className='mt-4'>
              <CardHeader>Case No. {index + 1}</CardHeader>
              <CardDescription >
                <div className='p-6'>
                  <p>First Hearing: <span className='font-bold'> {caseItem.FirstHearing} </span></p>
                  <p>Next Hearing: <span className='font-bold'> {caseItem.NextHearing}</span></p>
                </div>
              </CardDescription>
            </Card>
          ))}

        </div>

      </div >
    </div >
  )
}
