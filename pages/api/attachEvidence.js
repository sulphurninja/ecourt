// pages/api/attachEvidence.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import Cases from '../../models/caseModel'; // Import your Case model

connectDB(); // Connect to your MongoDB database

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { caseId, evidence } = req.body;

        try {
            // Find the case by ID and update its evidence field
            const updatedCase = await Cases.findByIdAndUpdate(
                caseId,
                { evidence },
                { new: true } // Return the updated document
            );

            res.status(200).json({ success: true, data: updatedCase });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
