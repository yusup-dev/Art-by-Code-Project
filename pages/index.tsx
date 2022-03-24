import Head from "next/head";
import Image from "next/image";
import heading from "../img/home/Header.gif";
import img1 from "../img/home/1.png";
import img2 from "../img/home/2.png";
import img3 from "../img/home/3.png";
import img4 from "../img/home/4.png";
import img5 from "../img/home/5.png";
import img6 from "../img/home/6.png";
import img7 from "../img/home/7.png";
import img8 from "../img/home/8.png";
import img9 from "../img/home/9.png";
import img10 from "../img/home/10.png";
import img11 from "../img/home/11.png";
import img12 from "../img/home/12.png";
import img13 from "../img/home/13.png";
import img14 from "../img/home/14.png";
import img15 from "../img/home/15.png";
import img16 from "../img/home/16.png";
import img17 from "../img/home/17.png";
import img18 from "../img/home/18.png";
import img19 from "../img/home/19.png";
import Layout from "../components/Layout";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Nunito:wght@300&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;600&family=Nunito:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="flex justify-center">
          <div className=" lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[350px]">
            <ScrollToTop smooth color="#1DC0AD" style={{ paddingLeft: "6px" }} />
            <div className="lg:flex justify-between md:block mt-32 lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[350px]">
              <div className="order-last lg:pt-10 pt-3 pb-10 relative z-50 flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
                <Image src={heading} />
              </div>
              <div className="lg:mt-28 md:mt-14 lg:text-left mb-10 lg:w-[520px] sm:w-[500px] " data-aos="zoom-in" data-aos-duration="1000">
                <p className="text-[24px]">
                  <span className="font-[400]">Kami adalah</span>{" "}
                  <span className="font-[700] text-[#1DC0AD]" style={{ fontFamily: "Montserrat Alternates" }}>
                    Art By Code | ABC
                  </span>
                </p>
                <h1 className="text-[48px] mt-7 font-[900]">Ayo ciptakan sesuatu yang indah dari sebuah kode</h1>
                <div className="mt-[44px]">
                  <Link to="one" spy={true} smooth={true} offset={50} duration={500} className="mt-[44px] w-[200px] h-[50px] rounded-[10px] text-white bg-[#1DC0AD] text-[14px] px-[30px] py-[14px]">
                    Mau tau lebih banyak
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-48 lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[350px]" id="one">
              <div className="text-center">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                  <span className="border-b-4 border-[#1DC0AD] px-5"></span>
                </div>
                <h1 className="text-[48px] -mt-6 font-[900]" data-aos="zoom-in" data-aos-duration="1000">
                  Solusi Kami
                </h1>
              </div>
              <div>
                <div className="mt-24 flex flex-wrap lg:justify-between justify-center">
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img1} />
                  </div>
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img2} />
                  </div>
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img3} />
                  </div>
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img4} />
                  </div>
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img5} />
                  </div>
                  <div className="mb-24 mr-5" data-aos="zoom-in-down" data-aos-duration="1000">
                    <Image src={img6} />
                  </div>
                </div>
              </div>
              <div className="text-center" data-aos="zoom-in-down" data-aos-duration="1000">
                <Link to="two" spy={true} smooth={true} offset={50} duration={500} className="mt-[44px] w-[200px] h-[50px] rounded-[10px] text-white bg-[#1DC0AD] text-[14px] px-[30px] py-[14px]">
                  Lihat detailnya dong
                </Link>
              </div>
            </div>
            <div className="pt-48 lg:w-[1100px]" id="two">
              <div className="text-center mb-20">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                  <span className="border-b-4 border-[#1DC0AD] px-5"></span>
                </div>
                <h1 className="text-[48px] -mt-6 font-[900]" data-aos="zoom-in" data-aos-duration="1000">
                  Klien Kami
                </h1>
              </div>
              <div className="mt-10">
                <div className="flex flex-wrap justify-center">
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img7} />
                  </div>
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img8} />
                  </div>
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img9} />
                  </div>
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img10} />
                  </div>
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img11} />
                  </div>
                  <div className="mb-20 mx-10" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img12} />
                  </div>
                  <div className="mb-20 mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img13} />
                  </div>
                  <div className="mb-20 mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img14} />
                  </div>
                  <div className="mb-20  mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img15} />
                  </div>
                  <div className="mb-20 mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img16} />
                  </div>
                  <div className="mb-20 mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img17} />
                  </div>
                  <div className="mb-20 mx-7" data-aos="zoom-out" data-aos-duration="1000">
                    <Image src={img18} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="lg:w-[450px] w-[350px] pb-20">
                <div className="mb-7" data-aos="fade-up" data-aos-duration="1000">
                  <Image src={img19} />
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                  <h1 className="text-[48px] -mt-6 font-[900]">Apakah kamu siap?</h1>
                  <p>Beritahu kami apa yang kamu mau bangun atau kesulitan apa yang kamu hadapi</p>
                </div>
                <div className="mt-14 flex justify-center">
                  <button className="w-[150px] h-[55.4px] rounded-[10px] border border-[#1DC0AD] text-[#1DC0AD]" data-aos="fade-up" data-aos-duration="1000">
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
