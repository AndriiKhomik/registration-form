"use client";

import React from "react";
import Link from "next/link";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Container from "./Container";
import { inter } from "../layout";
import Input from "./Input";

const Footer = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="bg-black">
      <Container>
        <h3
          className={`text-white text-center font-extrabold text-4xl py-6 ${inter.className} border-b-2 border-white mb-8 md:pt-20 md:pb-10`}
        >
          <Link href="/">Logo Here</Link>
        </h3>
        <div className="text-white pb-11 md:flex md:flex-wrap lg:flex-nowrap">
          <div className="grid grid-cols-8 gap-x-3">
            <div className="col-span-5 md:pl-3 max-w-[334px]">
              <h5 className="text-lg mb-6 font-semibold">Reach us</h5>
              <address className="not-italic mb-14">
                <a
                  href="tel:+1012 3456 789"
                  className="flex flex-col md:flex-row mb-3 md:mb-12"
                >
                  <span className="text-2xl md:mx-0 mb-3 md:mr-5">
                    <BiSolidPhoneCall />
                  </span>
                  <span className="text-xs md:text-base">+1012 3456 789</span>
                </a>
                <a
                  href="mailto:demo@gmail.com"
                  className="flex flex-col md:flex-row mb-3 md:mb-12"
                >
                  <span className="text-2xl md:mx-0 mb-3 md:mr-5">
                    <MdEmail />
                  </span>
                  <span className="text-xs md:text-base">demo@gmail.com</span>
                </a>
                <div className="flex flex-col md:flex-row mb-3 md:mb-12">
                  <span className="text-2xl md:mx-0 mb-3 md:mr-5">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-xs md:text-base">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </span>
                </div>
              </address>
            </div>
            <div className="col-span-3">
              <h5 className="text-lg mb-6 font-semibold">Company</h5>
              <div className="flex flex-col">
                <Link href="/about" className="mb-6 text-xs">
                  About
                </Link>
                <Link href="/contact" className="mb-6 text-xs">
                  Contact
                </Link>
                <Link href="/blog" className="mb-6 text-xs">
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-x-3">
            <div className="col-span-6">
              <h5 className="text-lg mb-6 font-semibold">Legal</h5>
              <div className="flex flex-col">
                <Link href="/policy" className="mb-6 text-xs">
                  Privacy Policy
                </Link>
                <Link href="/tearms-n-services" className="mb-6 text-xs">
                  Terms & Services
                </Link>
                <Link href="/usage-terms" className="mb-6 text-xs">
                  Terms of Use
                </Link>
                <Link href="/refund-policy" className="mb-6 text-xs">
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className="col-span-4 md:mr-3">
              <h5 className="text-lg mb-6 font-semibold">Quick Links</h5>
              <div className="flex flex-col">
                <Link href="/keybox" className="mb-6 text-xs">
                  Techlabz Keybox
                </Link>
                <Link href="/downloads" className="mb-6 text-xs">
                  Downloads
                </Link>
                <Link href="/forum" className="mb-6 text-xs">
                  Forum
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-6 pl-3 pb-3 rounded-md pr-6 bg-zinc-900">
            <h5 className="text-lg mb-6 font-semibold">Join Our Newsletter</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full justify-between items-end mb-6">
                <Input
                  id="email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="Your email address"
                  classNames="bg-zinc-800 border-b-2 border-transparent text-zinc-500 focus:border-b-2 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-[104px] bg-black h-[38px] text-xs"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="opacity-50 text-sm">
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
