"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white rounded-4xl p-4 ">
      <div className="flex items-center justify-between ">
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="TaskCoalition Logo"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-12">
          <div className="flex items-center gap-2">
            <Image src="/home.svg" width={15} height={15} alt="Home Icon" />
            <Link
              href="/overview"
              className="text-black text-sm font-medium hover:text-[#01F0D0]"
            >
              Overview
            </Link>
          </div>
          <div className="flex items-center gap-2 bg-[#01F0D0] px-4 py-2 rounded-full">
            <Image
              src="/users.svg"
              width={20}
              height={20}
              alt="Patients Icon"
            />
            <Link
              href="/patients"
              className="text-black text-sm font-medium hover:text-[#01F0D0]"
            >
              Patients
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/schedule.svg"
              width={15}
              height={15}
              alt="Schedule Icon"
            />
            <Link
              href="/schedule"
              className="text-black text-sm font-medium hover:text-[#01F0D0]"
            >
              Schedule
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/messages.svg"
              width={15}
              height={15}
              alt="Message Icon"
            />

            <Link
              href="/message"
              className="text-black text-sm font-medium hover:text-[#01F0D0]"
            >
              Message
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/credit-card.svg"
              width={15}
              height={15}
              alt="Transactions Icon"
            />
            <Link
              href="/transactions"
              className="text-black text-sm font-medium hover:text-[#01F0D0]"
            >
              Transactions
            </Link>
          </div>
        </div>

        <div className=" ">
          <Image
            src="/profilephoto.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="ml-2 hidden md:block text-center md:mr-4">
          <p className="text-black font-semibold text-sm">Dr. Jose Simmons</p>
          <p className="text-gray-400 text-sm">General Practitioner</p>
        </div>
        <p className="  text-gray-100 text-3xl hidden md:block">|</p>

        <div className="md:flex ml-2 hidden md:block md:mr-2 ">
          <Settings className="w-[19px]" />
          <EllipsisVertical className="w-[19px]" />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          <Link
            href="#"
            className="text-black text-sm font-medium hover:text-[#01F0D0]"
            onClick={toggleMenu}
          >
            Overview
          </Link>
          <Link
            href="#"
            className="text-black text-sm font-medium hover:text-[#01F0D0]"
            onClick={toggleMenu}
          >
            Patients
          </Link>
          <Link
            href="#"
            className="text-black text-sm font-medium hover:text-[#01F0D0]"
            onClick={toggleMenu}
          >
            Schedule
          </Link>
          <Link
            href="#"
            className="text-black text-sm font-medium hover:text-[#01F0D0]"
            onClick={toggleMenu}
          >
            Message
          </Link>
          <Link
            href="#"
            className="text-black text-sm font-medium hover:text-[#01F0D0]"
            onClick={toggleMenu}
          >
            Transactions
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
