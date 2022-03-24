import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../img/about/1.gif";
import img2 from "../img/about/icn1.svg";
import img3 from "../img/about/icn2.svg";
import img4 from "../img/home/19.png";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
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
        <div className="flex justify-center">
          <div className="lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[350px]">
            <div data-aos="fade-right" data-aos-duration="1000">
              <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">OUR BELIEF</p>
              <div className="leading-[40px]">
                <span className="font-[300] text-[34px]">Kami percaya pada pemberdayaan teknologi untuk semua, dan sadar bahwa</span>
                <span className="font-[900] text-[34px]"> kami dapat membuat perubahan dengan memberikan layanan teknologi yang berkualitas</span>
              </div>
            </div>
            <span className="border-b-4 border-[#1DC0AD] px-5"></span>
            <div className="lg:flex justify-between">
              <div className="mt-7" data-aos="fade-left" data-aos-duration="1000">
                <div className="mb-2">
                  <Image src={img2} />
                </div>
                <p className="font-[900] text-[18px]">Siapa yang kami bantu?</p>
                <p className="text-[14px] font-[400] mt-2">
                  Dari usaha kecil, menengah, sampai dengan besar yang mencari teknologi
                  <br />
                  dalam pekembangan dan efisiensi bisnis. Kami bertujuan untuk menjadi
                  <br />
                  rekan strategis, jangka panjang yang dapat mewujudkan kebutuhan dan
                  <br />
                  juga menjadi lawan diskusi dari para rekan kami.
                </p>
              </div>
              <div className="mt-7" data-aos="fade-right" data-aos-duration="1000">
                <div className="mb-2">
                  <Image src={img3} />
                </div>
                <p className="font-[900] text-[18px]">Apa yang kamu percayai</p>
                <p className="text-[14px] font-[400] mt-2">
                  Bekerjalah dengan sepenuh hati integritas untuk memberikan hasil yang
                  <br />
                  terbaik, karena kesuksesan rekan kami akan menjadi pendiri kita untuk
                  <br />
                  bisa lebih berkembang juga
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <Image src={img1} />
            </div>
          </div>
          <div className="text-center">
            <div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <Image src={img4} />
              </div>
              <h1 className="text-[48px] font-[900]" data-aos="fade-right" data-aos-duration="1000">
                Apakah kamu siap?
              </h1>
              <p data-aos="fade-left" data-aos-duration="1000">
                Beritahu kami apa yang mau kamu bangun atau kesulitan apa yang kamu hadapi
              </p>
              <button className="w-[150px] h-[55.4px] border border-[#1DC0AD] rounded-[10px] text-[18px] text-[#1DC0AD] my-20" data-aos="zoom-in" data-aos-duration="1000">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
