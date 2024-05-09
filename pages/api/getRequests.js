// pages/api/getLawyers.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import Request from '../../models/requestModel'; // Import your Lawyer model

connectDB(); // Connect to your MongoDB database

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { lawyerID } = req.query;

            // Fetch all lawyers from the database
            const requests = await Request.find({ lawyer: lawyerID });

            res.status(200).json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
