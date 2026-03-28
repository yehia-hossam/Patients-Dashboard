"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Profile() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev");
        const data = await response.json();
        const jessicaData =
          data.patients && Array.isArray(data.patients)
            ? data.patients.find((patient) => patient.name === "Jessica Taylor")
            : null;
        setPatientData(jessicaData || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="">
      {patientData && (
        <>
          <div className="flex flex-col items-center justify-center p-4">
            <Image
              src="/Jessica-Taylor.png"
              width={200}
              height={200}
              alt="Profile Picture"
              className="rounded-full mb-4"
            />
            <h1 className="text-2xl font-semibold">{patientData.name || "Jessica Taylor"}</h1>
          </div>

          <div className="flex gap-2 m-4">
            <div className="bg-[#f0eeeea9] flex items-center justify-center rounded-[50%] p-4">
              <Image
                src="/schedule.svg" 
                width={20}
                height={20}
                alt="Calendar Icon"
                className=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Date Of Birth</p>
              <p className="text-sm font-semibold">
                {new Date(patientData.date_of_birth).toLocaleDateString() || "August 23, 1996"}
              </p>
            </div>
          </div>

          <div className="flex gap-2 m-4">
            <div className="bg-[#f0eeeea9] flex items-center justify-center rounded-[50%] p-2">
              <Image
                src="/FemaleIcon.svg" 
                width={35}
                height={35}
                alt="Gender Icon"
                className=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Gender</p>
              <p className="text-sm font-semibold">{patientData.gender || "Female"}</p>
            </div>
          </div>

          <div className="flex gap-2 m-4">
            <div className="bg-[#f0eeeea9] flex items-center justify-center rounded-[50%] p-2">
              <Image
                src="/PhoneIcon.svg" 
                width={35}
                height={35}
                alt="Phone Icon"
                className=""
              />
            </div>



     

            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Contact Info</p>
              <p className="text-sm font-semibold">{patientData.phone || "(415) 555-1234"}</p>
            </div>
          </div>

          <div className="flex gap-2 m-4">
            <div className="bg-[#f0eeeea9] flex items-center justify-center rounded-[50%] p-2">
              <Image
                src="/PhoneIcon.svg" 
                width={35}
                height={35}
                alt="Emergency Icon"
                className=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Emergency Contacts</p>
              <p className="text-sm font-semibold">{patientData.emergency_phone || "(415) 555-5678"}</p>
            </div>
          </div>

          <div className="flex gap-2 m-4">
            <div className="bg-[#f0eeeea9] flex items-center justify-center rounded-[50%] p-2">
              <Image
                src="/InsuranceIcon.svg" 
                width={35}
                height={35}
                alt="Insurance Icon"
                className=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Insurance Provider</p>
              <p className="text-sm font-semibold">
                {patientData.insurance_provider || "Sunrise Health Assurance"}
              </p>
              
            </div>

            
          </div>
          <div className="">
                     <div className="flex justify-center ">
        <button className="bg-[#01F0D0] px-8 text-sm py-2  cursor-pointer rounded-3xl">Show All Information</button>
      </div>
          </div>
      
          
        </>
        
      )}

     
    </div>
  );
}

export default Profile;