import React from 'react';

const diagnosticData = [
  {
    problem: 'Hypertension',
    description: 'Chronic high blood pressure',
    status: 'Under Observation',
  },
  {
    problem: 'Type 2 Diabetes',
    description: 'Insulin resistance and elevated blood sugar',
    status: 'Cured',
  },
  {
    problem: 'Asthma',
    description: 'Recurrent episodes of bronchial constriction',
    status: 'Inactive',
  },

];

function DiagnosticList() {
  return (
    <div className=" rounded-2xl  h-[440px] flex flex-col overflow-hidden">
      <h2 className="text-[24px] font-semibold text-[#072635] mb-6">Diagnostic List</h2>
      
      {/* Table Header */}
      <div className="bg-[#F6F6F6] rounded-full p-4 flex text-sm font-semibold text-[#072635] mb-2 ">
        <div className="w-[30%]">Problem/Diagnosis</div>
        <div className="w-[50%]">Description</div>
        <div className="w-[20%]">Status</div>
      </div>
      
      {/* Table Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {diagnosticData.map((item, index) => (
          <div 
            key={index} 
            className="flex p-4 border-b border-gray-200 last:border-b-0 text-sm text-[#072635]"
          >
            <div className="w-[30%] font-normal">{item.problem}</div>
            <div className="w-[50%] text-[#707070] font-normal">{item.description}</div>
            <div className="w-[20%] font-normal">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiagnosticList;