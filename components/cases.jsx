import { useState, useEffect } from 'react';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';

export function JudgeCases() {
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
            <div className='p-2'>
                {cases.map((caseItem, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <p>CNR Number: {caseItem.CNR}</p>


                        </CardHeader>
                        <CardDescription>
                            <div className="px-4 py-3">
                                <p>Filing Number: {caseItem.Filing}</p>
                                <p>First Hearing: {caseItem.FirstHearing}</p>
                                <p>Judge ID: {caseItem.JudgeID}</p>
                                <p>Next Hearing: {caseItem.NextHearing}</p>
                                <p>Victim Statement: {caseItem.VictimStatement}</p>
                                <p>Lawyer: {caseItem.lawyer}</p>
                                <p>Client Name: {caseItem.userName}</p>
                                {/* Add other fields */}
                                <p>Evidence: {caseItem.evidence}</p>
                            </div>
                        </CardDescription>
                    </Card>
                ))}
            </div>
        </>
    );
}
