// pages/api/updateCase.js


import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import CaseModel from '../../models/caseModel'; // Import your Request model

connectDB(); // Connect to your MongoDB database


export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { CNR, FirstHearing, NextHearing } = req.body;
  
    try {
      // Assuming you have a database model named CaseModel
      const caseToUpdate = await CaseModel.findOne({ CNR });
  
      if (!caseToUpdate) {
        return res.status(404).json({ message: 'Case not found' });
      }
  
      caseToUpdate.FirstHearing = FirstHearing;
      caseToUpdate.NextHearing = NextHearing;
  
      await caseToUpdate.save();
  
      return res.status(200).json({ message: 'Case updated successfully' });
    } catch (error) {
      console.error('Error updating case:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  