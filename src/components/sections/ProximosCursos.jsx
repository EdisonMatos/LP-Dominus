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

import imgCursoDominus from "../../assets/imgs/cursos/imagemCursoCarrosel1.webp";
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
    original: contentCursos.texts.curso1.banner.img1,
    thumbnail: img1,
  },
  // {
  //   original: contentCursos.texts.curso1.banner.img2,
  //   thumbnail: img2,
  // },
];

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

function TextoComRolagem({ children }) {
  return (
    <div
      className="overflow-y-auto max-h-[400px] pr-2 scroll-container"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}

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
      {/* PRIMEIRO CURSO */}

      {/* SEGUNDO CURSO */}
      <SectionWrapper className="flex flex-col desktop1:flex-row desktop1:gap-x-[40px] desktop1:justify-evenly ">
        <MotionDivDownToUp className="relative w-[100%] desktop1:w-[600px] desktop2:w-[485px] flex flex-col items-center justify-center">
          <img
            src="/imgs/avos.jpg"
            alt="Projeto Avós e Netos pelos Livros"
            className="w-full rounded-xl"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px] mt-6">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center desktop1:flex desktop1:w-full"
              miniTitle={contentCursos.texts.curso2.date}
              sectionHeaderTitle={contentCursos.texts.curso2.title}
              color=""
              type="article"
            />

            <MotionDivDownToUp>
              <TextoComRolagem>
                <Paragraphs className="text-secondary text-paragraph2 text-opacity-80 mb-[48px]">
                  {contentCursos.texts.curso2.description}
                </Paragraphs>
              </TextoComRolagem>
            </MotionDivDownToUp>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>

      <Dialog
        className="font-secondFont"
        header={<div className="pb-4 border-b">{modalTitle}</div>}
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
          <p className="m-0">{modalContent}</p>
        ) : (
          <div>
            <p>{contentCursos.texts.curso1.descriptionModal}</p>
          </div>
        )}
      </Dialog>
    </SectionArea>
  );
}
