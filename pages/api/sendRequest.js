// pages/api/sendRequest.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import Request from '../../models/requestModel'; // Import your Request model

connectDB(); // Connect to your MongoDB database

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userName, lawyer } = req.body;

    try {
      // Check if the request already exists
      const existingRequest = await Request.findOne({ lawyer });

      if (existingRequest) {
        res.status(400).json({ success: false, message: 'Request already exists' });
        return;
      }

      // Create a new request
      const newRequest = new Request({
        userName,
        lawyer,
        status: 'pending' // Set the status to pending by default
      });

      // Save the request to the database
      await newRequest.save();

      res.status(201).json({ success: true, data: newRequest });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
