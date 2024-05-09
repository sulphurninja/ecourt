import { DataContext } from "@/store/GlobalState";
import axios from "axios";
import Link from "next/link"
import { useContext, useEffect, useState } from "react";
import { CaseCreationForm } from "./caseCreation";

export function LawyersReq() {

  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const [userName, setUserName] = useState(auth?.user?.userName || "");
  const [userDetails, setuserDetails] = useState()
  const [requests, setRequests] = useState([]);
  const [userID, setUserID] = useState();
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`/api/getLawyer?userName=${userName}`);
        setuserDetails(response.data.data); // Assuming response.data.data contains the array of lawyers
        if (response.data.data.length > 0) {
          setUserID(response.data.data[0]._id); // Assuming _id is the user ID field
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUser();
  }, [auth]);


  async function fetchRequests() {
    try {
      if (userID) {
        const response = await axios.get(`/api/getRequests?lawyerID=${userID}`);
        setRequests(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  }
  useEffect(() => {
    fetchRequests();
  }, []);

  const handleRequestAction = async (requestId, action) => {
    try {
      // Send request to the API to update the request status
      const response = await axios.put(`/api/updateRequest?requestId=${requestId}`, { status: action });
      console.log('Request action taken:', response.data.data);
      setFormVisible(true)
      // After updating the request status, refetch requests
      fetchRequests();
    } catch (error) {
      console.error('Error taking request action:', error);
    }
  };

  useEffect(() => {
    if (auth && auth.user && auth.user.userName) {
      // Update state and localStorage when user is authenticated
      setUserName(auth.user.userName);
      localStorage.setItem("userName", auth.user.userName);
    }
  }, [auth]);

  console.log(userID)

  return (<>
    <header
      className="flex items-center justify-between px-6 py-4 text-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">Welcome {userName}</h1>
      <div className="flex items-center space-x-4">
        <Link
          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
          href="#">
          View Account
        </Link>
        <Link
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          href="#">
          Logout
        </Link>
      </div>
    </header>
    <main className="bg-gray-100 px-6 py-8 dark:bg-gray-800">
      <div className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold">Client Requests</h2>
        {requests.length === 0 ? (
          <p>No new client requests today.</p>
        ) : (
          <ul>
            <div className="py-6 ">
              {requests.map((request, index) => (
                <div>
                  <li key={request._id}>
                    <h1></h1>
                    {/* Render request details */}
                    <p><span className="font-bold">{index + 1} .</span> Request ID: {request._id}</p>
                    <p>Request from: {request.userName}</p>
                    <p>Status: {request.status}</p>
                    {request.status === 'pending' && (
                      <>
                        <div className="flex gap-2">
                          <button className="bg-green-500 text-white px-4  py-1 rounded-md" onClick={() => handleRequestAction(request._id, 'accepted')}>Accept</button>
                          <button className="bg-red-500 text-white -500 px-4  py-1 rounded-md" onClick={() => handleRequestAction(request._id, 'rejected')}>Reject</button>
                        </div>
                      </>
                    )}

                    {/* Add more details as needed */}
                  </li>

                  {formVisible && (
                    <CaseCreationForm userName={request.userName} lawyer={request.lawyer} requestId={requests._id} />
                  )}
                </div>
              ))}
            </div>
          </ul>
        )}
      </div>
    </main>
  </>);
}
