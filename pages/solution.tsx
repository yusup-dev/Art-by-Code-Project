import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../img/solution/1.gif";
import img2 from "../img/solution/2.gif";
import img3 from "../img/solution/3.gif";
import img4 from "../img/solution/4.gif";
import img5 from "../img/solution/5.gif";
import img6 from "../img/solution/6.gif";
import img7 from "../img/home/19.png";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Solution() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Nunito:wght@300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <Layout>
        <ScrollToTop smooth color="#1DC0AD" style={{ paddingLeft: "6px" }} />
        <div className="fixed top-[100px] z-10 flex justify-center bg-white items-center pt-5 shadow-md w-full">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] items-center h-[60px]">
            <ul className="flex justify-between text-[14px] text-gray-400 items-center leading-10 overflow-x-auto wrapper font-[700]">
              <li className="min-w-[130px]  text-center mr-[15px]">
                <Link to="web" spy={true} smooth={true} offset={50} duration={500} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  Web Development
                </Link>
              </li>
              <li className="min-w-[130px]  text-center mr-[15px]">
                <Link to="app" spy={true} smooth={true} offset={50} duration={500} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  App Development
                </Link>
              </li>
              <li className="min-w-[100px]  text-center mr-[15px]">
                <Link to="ui" spy={true} smooth={true} offset={50} duration={500} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  UI/UX Design
                </Link>
              </li>
              <li className="min-w-[125px]  text-center mr-[15px]">
                <Link to="ml" spy={true} smooth={true} offset={50} duration={500} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  Machine Learning
                </Link>
              </li>
              <li className="min-w-[125px]  text-center mr-[15px]">
                <Link to="fa" spy={true} smooth={true} offset={50} duration={500} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  Flow Automation
                </Link>
              </li>
              <li className="min-w-[170px] -2 text-center">
                <Link to="bda" spy={true} smooth={true} offset={50} duration={500} delay={10} isDynamic={true} ignoreCancelEvents={false} activeClass="text-[#1DC0AD] border-b-[3px] border-[#1DC0AD]">
                  Branding & Digitals Ads
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center -mt-14 pt-64 pb-52" id="web">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between md:flex-none">
            <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1000">
              <Image src={img1} />
            </div>
            <div className="mt-16 mb-10 lg:w-[600px]" data-aos="fade-left" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">WEB DEVELOPMENT</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">Kami siap untuk punya website?</h1>
              <p className="font-[400] text-[18px] ">Tuangkan segala ide yang kamu simpan selama ini untuk website kamu, saatnya kita bust itu semua jadi kenyataan</p>
              <button className="w-[100px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Saya siap!</button>
            </div>
          </div>
        </div>
        <div className="background flex justify-center py-52" id="app">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between">
            <div className=" order-last mt-5" data-aos="fade-left" data-aos-duration="1000">
              <Image src={img2} />
            </div>
            <div className="mt-16 mb-10 lg:w-[670px]" data-aos="fade-right" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">APP DEVELOPMENT</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">"Bangun Aplikasi itu susah", kata mereka, bukan kami</h1>
              <p className="font-[400] text-[18px] ">Saat ini (hampir) semua orang itu pasti memiliki ponsel dan akan selalu membawanya kemanapun mereka berada. Jadi, tunggu apa lagi?</p>
              <button className="w-[120px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ayo bangun!</button>
            </div>
          </div>
        </div>
        <div className="py-52 flex justify-center" id="ui">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between">
            <div className="mt-10" data-aos="fade-right" data-aos-duration="1000">
              <Image src={img3} />
            </div>
            <div className="mt-16 mb-10 lg:w-[610px]" data-aos="fade-left" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">UI/UX DESIGN</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">Website / aplikasi dengan tampilan "lama", masih ?</h1>
              <p className="font-[400] text-[18px] ">Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka sesuatu website/aplikasi? Jelas penampilannya dan kemudian penggunaanya</p>
              <button className="w-[140px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Mau kece dong!</button>
            </div>
          </div>
        </div>
        <div className="py-52 flex justify-center background" id="ml">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between">
            <div className=" order-last lg:mt-10" data-aos="fade-left" data-aos-duration="1000">
              <Image src={img4} />
            </div>
            <div className="mt-16 mb-10 lg:w-[610px]" data-aos="fade-right" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">MEACHING LEARNING</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">Buat mesin bekerja untuk kamu, bukan sebaliknya</h1>
              <p className="font-[400] text-[18px] ">Rasanya ingin mengajarkan mesin untuk bekerja dengan sendirinya tanpa perlu ada kerjaan tambahan ?</p>
              <button className="w-[150px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ajari mesin kami!</button>
            </div>
          </div>
        </div>
        <div className="py-52 flex justify-center" id="fa">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between">
            <div data-aos="fade-right" data-aos-duration="1000">
              <Image src={img5} />
            </div>
            <div className="mt-16 mb-10 lg:w-[610px]" data-aos="fade-left" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">FLOW AUTOMATION</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">Kamu masih hobi ngerjain administrasi berulang?</h1>
              <p className="font-[400] text-[18px] ">Biarkan proses administrasi manual dan tumpukan dokumen fisik menjadi cerita dan kenangan lama (jangan yang lain-lain ya)</p>
              <button className="w-[170px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ayo buat cerita baru!</button>
            </div>
          </div>
        </div>
        <div className="py-52 flex justify-center background" id="bda">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px] lg:flex justify-between">
            <div className=" order-last lg:mt-10" data-aos="fade-left" data-aos-duration="1000">
              <Image src={img6} />
            </div>
            <div className="mt-16 mb-10 lg:w-[610px]" data-aos="fade-right" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">BRANDING & DIGITAL ADS</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">Ingin berkomunikasi lebih baik dengan konsumen?</h1>
              <p className="font-[400] text-[18px] ">Nama usaha kamu (asosiasi dan kredibilasnya) dan iklan sangat penting dalam membangun hubungan denagn konsumen. Mau tahu lebih?</p>
              <button className="w-[100px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Mau dong!</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-44 mb-24 text-center">
          <div className="lg:w-[450px] w-[350px]">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <Image src={img7} />
            </div>
            <h1 className="text-[48px] font-[900]" data-aos="fade-right" data-aos-duration="1000">
              Apakah kamu siap?
            </h1>
            <p data-aos="fade-left" data-aos-duration="1000">
              Beritahu kami apa yang mau kamu bangun atau kesulitan
              <br />
              apa yang kamu hadapi
            </p>
            <button className="w-[150px] h-[55.4px] border border-[#1DC0AD] rounded-[10px] text-[18px] text-[#1DC0AD] my-20" data-aos="zoom-in" data-aos-duration="1000">
              Hubungi Kami
            </button>
          </div>
        </div>
      </Layout>
      <script>AOS.init();</script>
    </div>
  );
}

export default Solution;
