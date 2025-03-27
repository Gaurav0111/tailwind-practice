import React from "react";

export default function InputForm() {
    return (
        <section className="m-6 p-6 border rounded-lg shadow-lg bg-white max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Patient Information</h2>
            <hr className="mb-4" />

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">First Name:</label>
                        <input className=" rounded pl-2 w-full" type="text" placeholder="Enter first name" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Middle Name:</label>
                        <input className=" rounded pl-2 w-full" type="text" placeholder="Enter middle name" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Last Name:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter last name" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Street:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter street" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">City:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter city" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">State:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter state" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Zip:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter zip" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Phone Number:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter phone number" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Secondary (Optional):</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter secondary number" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Preferred Pharmacy:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter pharmacy name" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Emergency Contact:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter emergency contact" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">D.O.B.:</label>
                        <input className="rounded pl-2 w-full" type="date" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Marital Status:</label>
                        <input className="rounded pl-2 w-full" type="text" placeholder="Enter marital status" />
                    </div>

                    <div className="flex items-center">
                        <label className="w-32 text-gray-700">Gender:</label>
                        <select className="border-b rounded pl-2 w-full ">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                            <option value="None">Opt Not to Disclose</option>
                        </select>
                    </div>
                </div>
            </form>
                <div className="flex justify-center text-lg text-gray-200">
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded w-20">Submit</button>
                </div>
        </section>
    );
}
