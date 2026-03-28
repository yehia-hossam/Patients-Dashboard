"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DiagnosisHistory() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev"
        );
        const data = await response.json();
        console.log("API Response:", data);
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

  const chartData = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: patientData?.diagnosis_history?.[0]?.blood_pressure?.systolic
          ?.value
          ? [
              120,
              125,
              130,
              135,
              140,
              patientData.diagnosis_history[0].blood_pressure.systolic.value,
            ]
          : [120, 125, 130, 135, 140, 160],
        borderColor: "#C26EB4",
        backgroundColor: "rgba(197, 58, 58, 0.2)",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#C26EB4",
      },
      {
        label: "Diastolic",
        data: patientData?.diagnosis_history?.[0]?.blood_pressure?.diastolic
          ?.value
          ? [
              80,
              82,
              85,
              88,
              90,
              patientData.diagnosis_history[0].blood_pressure.diastolic.value,
            ]
          : [80, 82, 85, 88, 90, 78],
        borderColor: "#7E6CAB",
        backgroundColor: "rgba(136, 132, 216, 0.2)",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#8884d8",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: " (Last 6 months) ",
        font: {
          size: 16,
          weight: "bold",
          color: "#333",
        },
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#666",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#eee",
        },
        title: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#666",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#eee",
        },
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="rounded-lg    ">
      <p className="font-semibold text-[22px] text-[#333] mb-4">
        Diagnosis History
      </p>
      <div className="bg-[#F4F0FE] p-4 rounded-2xl md:h-[298px]  ">
        <p className="font-semibold"> Blood Pressure</p>
        <div className="flex flex-col h-full ">
          <div className="flex w-full">
            <div className="w-2/3 mt-2 h-48">
              <Line data={chartData} options={chartOptions} />
            </div>

            <div className="w-1/3 p-4 ">
              <div className="mb-2 ">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#E66FD2] rounded-full"></div>
                  <p className="">Systolic</p>
                </div>

                <p className="text-2xl  ">
                  {patientData?.diagnosis_history?.[0]?.blood_pressure?.systolic
                    ?.value || 160}
                </p>
                <p className="text-sm text-[#666]">
                  <span className="text-xl">▲</span> Higher than Average
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#8C6FE6] rounded-full"></div>
                  <p className="">Diastolic</p>
                </div>

                <p className="text-2xl  ">
                  {patientData?.diagnosis_history?.[0]?.blood_pressure
                    ?.diastolic?.value || 78}
                </p>
                <p className="text-sm text-[#666]">
                  <span className="text-xl">▼</span> Lower than Average
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" ">
        <div className="grid md:grid-cols-3 grid-col-1  gap-4 mt-4  ">
          <div className="bg-[#E0F3FA] p-4 rounded text-center flex flex-col items-center  rounded-2xl">
                        <Image src={"/respiratory rate.svg"} width={100} height={100} alt="Vitals" className="col-span-3 mb-4"/>

            <p className="text-md text-[#666]">Respiratory Rate</p>
            <p className="text-2xl font-semibold text-[#333] ">
              {patientData?.vitals?.respiratory_rate?.value || "20"} bpm {" "}
              {patientData?.vitals?.respiratory_rate?.status || ""}
            
            </p>
                        <p className="text-xs">Normal</p>  

          </div>
          <div className="bg-[#FFE6E9] p-4 rounded text-center flex flex-col items-center rounded-2xl">
            <Image src={"/temperature.svg"} width={100} height={100} alt="Vitals" className="col-span-3 mb-4"/>
            <p className="text-md text-[#666]">Temperature</p>
            <p className="text-2xl font-semibold text-[#333]">
              {patientData?.vitals?.temperature?.value || "98.6"}°F -{" "}
              {patientData?.vitals?.temperature?.status || ""}
            </p>
          <p className="text-xs">Normal</p>  
          </div>
          <div className="bg-[#FFE6F1] p-4 rounded text-center flex flex-col items-center rounded-2xl">
            <Image src={"/HeartBPM.svg"} width={100} height={100} alt="Vitals" className="col-span-3 mb-4"/>
            <p className="text-md text-[#666]">Heart Rate</p>
            <p className="text-2xl font-semibold text-[#333]">
              {patientData?.vitals?.heart_rate?.value || "78"} bpm -{" "}
              {patientData?.vitals?.heart_rate?.status || ""}
            </p>
                      <p className="text-xs">Lower than Average</p>  

          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
