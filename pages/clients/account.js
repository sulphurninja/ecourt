import Sidebar from '@/components/sidebar'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'; // Import useRouter to access route parameters
import { DataContext } from '@/store/GlobalState';
import axios from 'axios';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

export default function Account() {
    const [user, setUser] = useState(null); // State to hold user details
    const router = useRouter(); // Router instance
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

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get(`/api/getUser?userName=${userName}`);
                setuserDetails(response.data.data); // Assuming response.data.data contains the array of lawyers\
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUser();
    }, []);

    console.log(userDetails, 'hmm')
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 p-6'>
                <Card>
                    <CardHeader>{userName}</CardHeader>
                    <CardDescription>
                        {userDetails.map((userdetail) => (
                            <div className='p-6 grid grid-cols-2 gap-4 text-xl ' key={userdetail._id}>
                                <h1>First Name : {userdetail.firstName}</h1>
                                <h1>Last Name : {userdetail.lastName}</h1>
                                <h1>DOB : {userdetail.dob}</h1>
                            </div>
                        ))}

                    </CardDescription>

                </Card>
            </div>
        </div>
    );
}
