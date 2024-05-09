import { useState, useEffect } from 'react';
import Link from "next/link";

export function JudgeSchedule() {
    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);
    const [evidence, setEvidence] = useState('');
    const [FirstHearing, setFirstHearing] = useState('');
    const [NextHearing, setNextHearing] = useState('');

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

    const handleUpdateDates = async () => {
        try {
            const response = await fetch('/api/updateCase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    CNR: selectedCase.CNR,
                    FirstHearing,
                    NextHearing,
                }),
            });

            if (response.ok) {
    
                setSelectedCase(null);
                setFirstHearing('');
                setNextHearing('');
            } else {
                throw new Error('Failed to update case');
            }
        } catch (error) {
            console.error('Error updating case:', error);
        }
    };
    const handleSelectCase = (selectedCase) => {
        setSelectedCase(selectedCase);
        // You can also pre-fill the first hearing and next hearing dates if needed
        setFirstHearing(selectedCase.FirstHearing);
        setNextHearing(selectedCase.NextHearing);
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
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">  Evidence</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">  Select Case</th>
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
                               {caseItem.evidence}
                                    </td>
                                    <td className="px-4 py-3">
                                    <button onClick={() => handleSelectCase(caseItem)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Select
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
                        <h2 className="text-lg font-semibold mb-4">Update Hearing Dates</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">First Hearing</label>
                            <input
                                type="date"
                                value={FirstHearing}
                                onChange={(e) => setFirstHearing(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Next Hearing</label>
                            <input
                                type="date"
                                value={NextHearing}
                                onChange={(e) => setNextHearing(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleUpdateDates} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update
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
