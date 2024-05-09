import { useState, useEffect } from 'react';
import Link from "next/link";

export function LabCases() {
    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);
    const [evidence, setEvidence] = useState('');

    useEffect(() => {
        async function fetchCases() {
            try {
                const response = await fetch('/api/getCases');
                if (response.ok) {
                    const data = await response.json();
                    setCases(data.data);
                } else {
                    throw new Error('Failed to fetch cases');
                }
            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        }

        fetchCases();
    }, []);

    console.log(cases, 'cases')

    const handleAttachEvidence = async () => {
        try {
            const response = await fetch('/api/attachEvidence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    caseId: selectedCase._id,
                    evidence,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Evidence attached:', data.data);
                // You can update the state or UI as needed
            } else {
                throw new Error('Failed to attach evidence');
            }
        } catch (error) {
            console.error('Error attaching evidence:', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-sm">
                <div className="animate-fade-in-left text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Attach Evidences to the appropriate cases
                </div>
                <div className="flex gap-4">
                    <Link
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        href="#">
                        View Account
                    </Link>
                    <Link
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700"
                        href="#">
                        Logout
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">CNR Number</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Filing Number</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">First Hearing</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Judge ID</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Next Hearing</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Victim Statement</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Lawyer</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">Client Name</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200"> Attach Evidence</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {cases.map((caseItem, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3">{caseItem.CNR}</td>
                                    <td className="px-4 py-3">{caseItem.Filing}</td>
                                    <td className="px-4 py-3">{caseItem.FirstHearing}</td>
                                    <td className="px-4 py-3">{caseItem.JudgeID}</td>
                                    <td className="px-4 py-3">{caseItem.NextHearing}</td>
                                    <td className="px-4 py-3">{caseItem.VictimStatement}</td>
                                    <td className="px-4 py-3">{caseItem.lawyer}</td>
                                    <td className="px-4 py-3">{caseItem.userName}</td>
                                    {/* Add other table cells */}
                                    <td className="px-4 py-3">
                                        <button onClick={() => setSelectedCase(caseItem)} className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-8 rounded">
                                            Attach Evidence
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedCase && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Attach Evidence to Case</h2>
                        <textarea
                            className="w-full h-40 p-2 mb-4 border rounded"
                            placeholder="Enter evidence..."
                            value={evidence}
                            onChange={(e) => setEvidence(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button onClick={handleAttachEvidence} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Attach
                            </button>
                            <button onClick={() => setSelectedCase(null)} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
