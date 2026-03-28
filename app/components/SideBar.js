"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function SideBar() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState("Jessica Taylor"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.patients && Array.isArray(data.patients)) {
          setPatients(data.patients.map(p => ({
            ...p,
            gender: p.gender,
            age: p.age,
          })));
        } else {
          console.warn("No patients array found. Using fallback data.");
          setPatients([
            { name: "Emily Williams", gender: "Female", age: 18, image_url: "/Layer 8@2x.jpg" },
            { name: "Ryan Johnson", gender: "Male", age: 45, image_url: "/Layer 1@2x.png" },
            { name: "Brandon Mitchell", gender: "Male", age: 36, image_url: "/Layer 3@2x.png" },
            { name: "Jessica Taylor", gender: "Female", age: 28, image_url: "/Layer 2@2x.png" },
            { name: "Samantha Johnson", gender: "Female", age: 56, image_url: "/Layer 6@2x.png" },
            { name: "Ashley Martinez", gender: "Female", age: 54, image_url: "/Layer 12@2x.png" },
            { name: "Olivia Brown", gender: "Female", age: 32, image_url: "/Layer 10@2x.png" },
            { name: "Tyler Davis", gender: "Male", age: 19, image_url: "/Layer 9@2x.png" },
            { name: "Kevin Anderson", gender: "Male", age: 36, image_url: "/Layer 4@2x.png" },
            { name: "Dylan Thompson", gender: "Male", age: 52, image_url: "/Layer 5@2x.png" },
            { name: "Nathan Evans", gender: "Male", age: 58, image_url: "/Layer 7@2x.png" },
            { name: "Mike Nolan", gender: "Male", age: 31, image_url: "/pexels-photo-1222271@2x.png" },

          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setPatients([
          { name: "Emily Williams", gender: "Female", age: 18, image_url: "/Layer 8@2x.jpg" },
          { name: "Ryan Johnson", gender: "Male", age: 45, image_url: "/Layer 1@2x.png" },
          { name: "Brandon Mitchell", gender: "Male", age: 36, image_url: "/Layer 3@2x.png" },
          { name: "Jessica Taylor", gender: "Female", age: 28, image_url: "/Layer 2@2x.png" },
          { name: "Samantha Johnson", gender: "Female", age: 56, image_url: "/Layer 6@2x.png" },
          { name: "Ashley Martinez", gender: "Female", age: 54, image_url: "/Layer 12@2x.png" },
          { name: "Olivia Brown", gender: "Female", age: 32, image_url: "/Layer 10@2x.png" },
          { name: "Tyler Davis", gender: "Male", age: 19, image_url: "/Layer 9@2x.png" },
          { name: "Kevin Anderson", gender: "Male", age: 36, image_url: "/Layer 4@2x.png" },
          { name: "Dylan Thompson", gender: "Male", age: 52, image_url: "/Layer 5@2x.png" },
          { name: "Nathan Evans", gender: "Male", age: 58, image_url: "/Layer 7@2x.png" },
          { name: "Mike Nolan", gender: "Male", age: 31, image_url: "/pexels-photo-1222271@2x.png" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="  ">
      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold text-[24px] text-[#072635]">Patients</p>
        <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      {/* Patients List */}
      <div className="space-y-2 overflow-y-auto custom-scrollbar">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={`flex items-center p-2 rounded-xl cursor-pointer transition-all duration-200 
            ${selectedPatient === patient.name ? "bg-[#D8FCF7] shadow-sm" : "hover:bg-gray-50"}`}
            onClick={() => setSelectedPatient(patient.name)}
          >
            <div className="flex items-center flex-1">
              <Image
                src={patient.image_url || `/default-${patient.name.toLowerCase().replace(" ", "-")}.png`}
                alt={patient.name}
                width={48}
                height={48}
                className="rounded-full mr-4 object-cover w-12 h-12"
              />
              <div className="flex-1">
                <p className="font-bold text-[14px] text-[#072635]">{patient.name}</p>
                <div className="flex text-xs text-[#707070]">
                  <span>{patient.gender}, </span>
                  <span className="ml-1">{patient.age}</span>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-[#707070] rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;