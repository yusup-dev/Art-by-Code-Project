import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../img/logo.svg";
import Button from "./Button";
import { useRouter } from "next/router";
import Head from "next/head";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <div className="shadow-md fixed top-0 w-full bg-white z-[100] font-[700]">
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center lg:h-[100px] md:h-[80px] sm:h-[80px] h-[80px] lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[500px]">
            <div className="flex items items-center justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Link href="/">
                  <Image src={logo} />
                </Link>
              </div>
              <div className="hidden md:block font-[700]">
                <ul className="ml-10 flex items-baseline space-x-4">
                  <li className={`cursor-pointer px-3 py-2 text-[18px] ${router.pathname == "/" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/">Home</Link>
                    <div className="flex justify-center">
                      <span className={`text-center ${router.pathname == "/" ? "border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                    </div>
                  </li>
                  <li className={`cursor-pointer px-3 py-2 text-[18px] ${router.pathname == "/about" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/about">Tentang Kami</Link>
                    <div className="flex justify-center">
                      <span className={`text-center ${router.pathname == "/about" ? "border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                    </div>
                  </li>
                  <li className={`cursor-pointer px-3 py-2 text-[18px] ${router.pathname == "/solution" ? "text-[#1DC0AD]" : ""}`}>
                    <div className="flex items-center font">
                      <Link href="/solution">Solusi Kami</Link>
                      <i className="bx bx-chevron-down ml-2 text-[30px]"></i>
                    </div>
                    <div className="flex justify-center">
                      <span className={`${router.pathname == "/solution" ? "border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                    </div>
                  </li>
                  <li className={`cursor-pointer px-3 py-2 text-[18px] ${router.pathname == "/work" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/work">Cara Kerja</Link>
                    <div className="flex justify-center">
                      <span className={`text-center ${router.pathname == "/work" ? "border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                    </div>
                  </li>
                  <Button />
                </ul>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center text-gray-400" aria-controls="mobile-menu" aria-aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <i className="bx bx-menu text-4xl"></i> : <i className="bx bx-x text-4xl"></i>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            {(ref) => (
              <div className="md:hidden id=mobile-menu flex justify-center pb-7">
                <ul className="bg-white lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px]">
                  <li className={`cursor-pointer py-2 text-[18px] ${router.pathname == "/" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/">Home</Link>
                    <span className={`text-center ${router.pathname == "/" ? "ml-[4px] border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "ml-[4px] border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                  </li>
                  <li className={`cursor-pointer py-2 text-[18px] ${router.pathname == "/about" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/about">Tentang Kami</Link>
                    <span className={`text-center ${router.pathname == "/about" ? "ml-9 border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "ml-9 border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                  </li>
                  <li className={`cursor-pointer py-2 text-[18px] ${router.pathname == "/solution" ? "text-[#1DC0AD]" : ""}`}>
                    <div className="flex items-center font">
                      <Link href="/solution">Solusi Kami</Link>
                      <i className="bx bx-chevron-down ml-2 text-[30px]"></i>
                    </div>
                    <div>
                      <span className={`${router.pathname == "/solution" ? "ml-9 border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                    </div>
                  </li>
                  <li className={`cursor-pointer py-2 text-[18px] ${router.pathname == "/work" ? "text-[#1DC0AD]" : ""}`}>
                    <Link href="/work">Cara Kerja</Link>
                    <span className={`text-center ${router.pathname == "/work" ? "ml-6 border-[#1DC0AD] border-b-[3px] flex justify-center w-10 pt-1" : "ml-9 border-white border-b-[3px] flex justify-center w-10 pt-1"}`}></span>
                  </li>
                  <Button />
                </ul>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};
