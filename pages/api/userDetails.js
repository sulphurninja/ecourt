// pages/api/userDetails.js

import connectDB from "../../utils/connectDB";
import Users from '../../models/userModel';

connectDB();

export default async (req, res) => {
    try {
        if (req.method !== 'GET') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        // Assuming you have implemented authentication and have access to the logged-in user's ID
        const {userId} = req.query; // Replace with your authentication logic to get the user ID

        // Fetch the user details from the database
        const user = await Users.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
