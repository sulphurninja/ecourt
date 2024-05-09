// pages/api/getCasesByUserName.js

import CaseModel from '@/models/caseModel'; // Import your Case model

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userName } = req.query;

  try {
    // Fetch cases based on the provided userName
    const cases = await CaseModel.find({ userName });

    return res.status(200).json({ data: cases });
  } catch (error) {
    console.error('Error fetching cases:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
