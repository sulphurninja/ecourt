// pages/api/updateRequest.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import Request from '../../models/requestModel'; // Import your Request model

connectDB(); // Connect to your MongoDB database

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const { requestId } = req.query;
            const { status } = req.body;

            // Find the request by ID and update its status
            const updatedRequest = await Request.findByIdAndUpdate(requestId, { status }, { new: true });

            if (!updatedRequest) {
                return res.status(404).json({ success: false, message: 'Request not found' });
            }

            res.status(200).json({ success: true, data: updatedRequest });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
