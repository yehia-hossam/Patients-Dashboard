import Image from "next/image";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import Profile from "./components/Profile";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

export default function Home() {
  return (
    <div className="p-5 min-h-screen bg-[#F6F7F8]">
      <NavBar />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full md:w-[367px] h-[987px] bg-[#FFFFFF] rounded-lg  p-4">
          <SideBar />
        </div>

        <div className="w-full md:w-[766px] flex flex-col gap-6">
          <div className="bg-[#FFFFFF] rounded-lg  p-4 ">
            <DiagnosisHistory />

            
          </div>
          <div className="bg-[#FFFFFF] rounded-lg  p-4 h-[349px]">
            <DiagnosticList />
          </div>
        </div>

        <div className="w-full md:w-[367px] flex flex-col gap-6">
          <div className="bg-[#FFFFFF] rounded-lg  p-4 max-h-[750px]">
            <Profile />

   
          </div>
          <div className="bg-[#FFFFFF] rounded-lg  p-4 h-[260px]">
            <LabResults />
          </div>
        </div>
      </div>
    </div>
  );
}