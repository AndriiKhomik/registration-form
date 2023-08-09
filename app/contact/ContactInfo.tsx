"use client";

import React, { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const BREACKPOINT = 767;

const ContactInfo = () => {
  function getCurrentDimension() {
    return window.innerWidth;
  }
  const [isDesktop, setIsDesktop] = useState(
    getCurrentDimension() > BREACKPOINT
  );

  useEffect(() => {
    const updateDimension = () => {
      if (getCurrentDimension() > BREACKPOINT) {
        return setIsDesktop(true);
      }
      setIsDesktop(false);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [isDesktop]);

  return (
    <div className="bg-black text-white flex flex-col items-center md:items-start px-10 pt-10 pb-4 md:pb-8 rounded-lg relative overflow-hidden">
      <h3 className="text-2xl font-semibold">Contact information</h3>
      <p className="text-lg text-gray-100 mb-3 md:mb-20">
        Say something to start a live chat
      </p>
      <address className="not-italic mb-14 md:mb-36">
        <a
          href="tel:+1012 3456 789"
          className="flex flex-col md:flex-row mb-3 md:mb-12"
        >
          <span className="text-2xl mx-auto md:mx-0 mb-2 md:mr-5">
            <BiSolidPhoneCall />
          </span>
          <span className="text-center text-xs md:text-base">
            +1012 3456 789
          </span>
        </a>
        <a
          href="mailto:demo@gmail.com"
          className="flex flex-col md:flex-row mb-3 md:mb-12"
        >
          <span className="text-2xl mx-auto md:mx-0 mb-2 md:mr-5">
            <MdEmail />
          </span>
          <span className="text-center text-xs md:text-base">
            demo@gmail.com
          </span>
        </a>
        <div className="flex flex-col md:flex-row mb-3 md:mb-12">
          <span className="text-2xl mx-auto md:mx-0 mb-2 md:mr-5">
            <FaMapMarkerAlt />
          </span>
          <span className="text-center text-xs md:text-base">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </address>
      <div className="flex justify-center items-center">
        <div className="rounded-full bg-neutral-800 h-8 w-8 flex items-center justify-center text-lg hover:bg-white hover:text-black mr-6 transition-all duration-300">
          <FaTwitter />
        </div>
        <div className="rounded-full bg-neutral-800 h-8 w-8 flex items-center justify-center text-lg hover:bg-white hover:text-black mr-6 transition-all duration-300">
          <AiOutlineInstagram />
        </div>
        <div className="rounded-full bg-neutral-800 h-8 w-8 flex items-center justify-center text-lg hover:bg-white hover:text-black mr-6 transition-all duration-300">
          <BsDiscord />
        </div>
      </div>
      <div
        className={`absolute bottom-12 right-12 rounded-full bg-neutral-800  ${
          isDesktop ? "w-[138px] h-[138px] bottom-[70px]" : "w-14 h-14"
        }`}
      />
      <div
        className={`absolute -bottom-20 -right-[112px] rounded-full bg-neutral-600 opacity-50 w-48 h-48 ${
          isDesktop ? "w-[269px] h-[269px]" : "w-[192px] h-[192px]"
        }`}
      />
    </div>
  );
};

export default ContactInfo;
