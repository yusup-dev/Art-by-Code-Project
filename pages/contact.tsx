import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../img/contact/1.gif";
import ScrollToTop from "react-scroll-to-top";

function Contact() {
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
        <div className="flex justify-center mt-44 mb-24">
          <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[350px]">
            <ScrollToTop smooth color="#1DC0AD" style={{ paddingLeft: "6px" }} />
            <div className="lg:flex justify-between md:flex-none">
              <div className="md:order-last pb-10 flex justify-center">
                <Image src={img1} />
              </div>
              <div className="flex justify-center">
                <div className="w-[500px]">
                  <div>
                    <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">CONTACT ME</p>
                    <div className="leading-[40px]">
                      <span className="font-[300] text-[48px]">Apakah </span>
                      <span className="font-[900] text-[48px]">kamu siap?</span>
                    </div>
                    <p className="font-[400] text-[18px] mt-5">
                      Kami selalu siap untuk menjawab segala pertanyaan
                      <br />
                      dan kebutuhan kamu
                    </p>
                  </div>
                  <div className="mt-10 block lg:mr-20">
                    <div className=" mb-3">
                      <input type="text" placeholder="beritahu nama kamu ..." className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border-[#9B9B9B] border outline-none text-[#9B9B9B] px-5 rounded-[10px]" />
                    </div>
                    <div className=" mb-3">
                      <input
                        type="text"
                        placeholder="beritahu nama organisasi kamu ..."
                        className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border-[#9B9B9B] border outline-none text-[#9B9B9B] px-5 rounded-[10px]"
                      />
                    </div>
                    <div className=" mb-3">
                      <input
                        type="text"
                        placeholder="Beritahu kami peranmu di dalam organisasi ..."
                        className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border-[#9B9B9B] border outline-none text-[#9B9B9B] px-5 rounded-[10px]"
                      />
                    </div>
                    <div className=" mb-3">
                      <input type="text" placeholder="Beritahu kami email kamu ..." className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border-[#9B9B9B] border outline-none text-[#9B9B9B] px-5 rounded-[10px]" />
                    </div>
                    <div className="mb-3">
                      <form>
                        <select className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border-[#9B9B9B] border outline-none text-black  rounded-[10px] px-5 font-[900]">
                          <option value="volvo">Web Development</option>
                          <option value="saab">Mobile Development</option>
                          <option value="fiat">UI/UX Design</option>
                          <option value="audi">Middleware</option>
                        </select>
                      </form>
                    </div>
                    <div className="mt-10">
                      <button className="text-[18px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[400px] h-[60px] border outline-none text-white px-5 rounded-[10px] bg-[#1DC0AD] font-[900]">Aku siap! Kirimkan pesan!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
