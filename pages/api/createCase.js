// pages/api/getUser.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import CaseModel from '../../models/caseModel'; // Import your Lawyer model

connectDB(); // Connect to your MongoDB database



export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
  
        // Create a new case using the data from the request body
        const newCase = new CaseModel(req.body);
  
        // Save the new case to the database
        const savedCase = await newCase.save();
  
        res.status(201).json({ success: true, data: savedCase });
      } catch (error) {
        res.status(500).json({ success: false, error: error });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  }
  