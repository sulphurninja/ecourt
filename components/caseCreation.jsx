import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export function CaseCreationForm({ userName, lawyer, requestId }) {
    const [formData, setFormData] = useState({
        CNR: "",
        Filing: "",
        FirstHearing: "",
        NextHearing: "",
        JudgeID: "",
        VictimStatement: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            userName, // Autofill userName
            lawyer, // Autofill lawyer
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/createCase", formData);
            console.log("Case created:", response.data.data);
            toast.success("Case created successfully!")
            // Reset form data or perform any other necessary actions
        } catch (error) {
            console.error("Error creating case:", error);
        }
    };

    return (
        <form className="bg-black text-white p-4 rounded-md" onSubmit={handleSubmit}>
        <Toaster/>
            <h1 className="text-center text-xl mb-4 font-bold">Case details</h1>
            <div className="grid gap-8 grid-cols-2 justify-center items-center">
                <label>
                    CNR:
                    <input type="text" className="text-black  " name="CNR" value={formData.CNR} onChange={handleChange} />
                </label>
                <label>
                    Filing:
                    <input type="text" className="text-black" name="Filing" value={formData.Filing} onChange={handleChange} />
                </label> <label>
                    First Hearing:
                    <input type="text" className="text-black" name="FirstHearing" value={formData.FirstHearing} onChange={handleChange} />
                </label>
                <label>
                    Next Hearing:
                    <input type="text" className="text-black" name="NextHearing" value={formData.NextHearing} onChange={handleChange} />
                </label>
                <label>
                    Judge ID:
                    <input type="text" className="text-black" name="JudgeID" value={formData.JudgeID} onChange={handleChange} />
                </label>
                <label>
                    LawyerID:
                    <input type="text" className="text-black" name="Lawyer" value={lawyer} onChange={handleChange} />
                </label>
                <label>
                    Client:
                    <input type="text" className="text-black" name="userName" value={userName} onChange={handleChange} />
                </label>
            </div>
            {/* Other form fields */}
            <button className="flex p-2 rounded-md bg-white text-black mt-4 justify-center" type="submit">Create Case</button>
        </form>
    );
}
