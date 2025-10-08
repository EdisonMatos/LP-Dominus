import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";

import imgCursoDominus from "../../assets/imgs/hero/imagemCursoLegislativo.webp";
import WhatsappForm from "../interactives/WhatsappForm";
import { FilePenLine } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import contentCursos from "../../content/contentCursos";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/imgs/hero/carrossel1.jpg";
import img2 from "../../assets/imgs/hero/carrossel2.jpg";
import img3 from "../../assets/imgs/hero/carrossel3.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
];

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function ProximosCursos({
  instagram,
  facebook,
  x,
  linkedin,
  socialPrint,
}) {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("form");

  const openModal = (type) => {
    setModalType(type);
    setVisible(true);
  };

  return (
    <SectionArea
      id="curso"
      className="squares"
      paddingtop={true}
      paddingbottom={false}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-evenly">
        {socialPrint ? (
          <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
            <img
              src={imgCursoDominus}
              alt={content.texts.about.aboutSocial.img.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl "
            />
          </MotionDivDownToUp>
        ) : (
          // <MotionDivDownToUp className=" w-[100%] desktop1:w-[600px] desktop2:w-[485px] flex justify-center">
          //   <div className="relative w-full h-auto bg-center bg-no-repeat bg-cover shadow-custom-opacity shadow-secondary/25 tablet1:h-auto tablet1:w-full rounded-xl">
          //     <ImageGallery
          //       items={images}
          //       showNav={false}
          //       showFullscreenButton={false}
          //       useBrowserFullscreen={false}
          //       showBullets={true}
          //       showThumbnails={false}
          //       additionalClass="custom-gallery"
          //       autoPlay={true}
          //     />
          //     <style>
          //       {`
          //       .custom-gallery .image-gallery-slide img {
          //         height: 450px !important;
          //         width: 100% !important;
          //         object-fit: cover !important;
          //         border-radius: 10px !important;
          //         margin: 0 auto;
          //       }

          //       @media (min-width: 640px) and (max-width: 1023px) {
          //         .custom-gallery .image-gallery-slide img {
          //           min-height: 840px !important;
          //         }
          //       }

          //       @media (min-width: 1024px) {
          //         .custom-gallery .image-gallery-slide img {
          //           height: 600px !important;
          //         }
          //       }

          //       .custom-gallery .image-gallery-thumbnails img {
          //         height: 60px !important;
          //         width: 100px !important;
          //         object-fit: cover !important;
          //       }
          //     `}
          //     </style>
          //   </div>
          // </MotionDivDownToUp>
          <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
            <div
              style={{
                backgroundImage: `url(${content.texts.about.aboutSocial.img.img})`,
              }}
              className="relative bg-center bg-no-repeat bg-cover h-[450px] w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl shadow-custom-opacity shadow-secondary/25"
            ></div>
          </MotionDivDownToUp>
        )}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center desktop1:flex desktop1:w-full"
              miniTitle={contentCursos.texts.curso1.date}
              sectionHeaderTitle={contentCursos.texts.curso1.title}
              color=""
              type="article"
            />
            <MotionDivDownToUp>
              <Paragraphs className="text-secondary text-paragraph2 text-opacity-80 mb-[48px]">
                {contentCursos.texts.curso1.description}
              </Paragraphs>
            </MotionDivDownToUp>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-80 mb-[48px]"></Paragraphs>
          </MotionDivDownToUp>

          <div className="flex flex-col gap-6 tablet1:flex-row">
            <div className="flex flex-col gap-4">
              <Button
                label="Veja a programação aqui"
                className="text-black"
                textclassName="text-start"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-info-icon lucide-info"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                }
                onClick={() => {
                  setModalTitle("🗓 PROGRAMAÇÃO");
                  setVisible(true);
                  openModal("info");
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button
                label="Inscreva-se aqui"
                className="text-black"
                textclassName="text-start"
                icon={<FilePenLine />}
                onClick={() => {
                  setModalTitle("Cadastro");
                  setModalContent(<WhatsappForm />);
                  setVisible(true);
                  openModal("form");
                }}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={<div className="border-b pb-4">{modalTitle}</div>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": modalType === "form" ? "717px" : "800px",
          "1024px": modalType === "form" ? "70vw" : "60vw",
          "641px": modalType === "form" ? "90vw" : "85vw",
        }}
      >
        {modalType === "form" ? (
          <p className="m-0 ">{modalContent}</p>
        ) : (
          <div>
            <p>{contentCursos.texts.curso1.descriptionModal}</p>
          </div>
        )}
      </Dialog>
    </SectionArea>
  );
}
