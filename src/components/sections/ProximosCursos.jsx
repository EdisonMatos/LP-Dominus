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

import imgCursoDominus from "../../assets/imgs/hero/imagemCursoForm.jpg";
import WhatsappForm from "../interactives/WhatsappForm";
import { FilePenLine } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import contentCursos from "../../content/contentCursos";

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

  return (
    <SectionArea id="about" className="squares" paddingtop={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px]  desktop1:gap-x-[40px]  desktop1:justify-between">
        {socialPrint ? (
          <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
            <img
              src={imgCursoDominus}
              alt={content.texts.about.aboutSocial.img.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
            />
          </MotionDivDownToUp>
        ) : (
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
              <Paragraphs className="text-secondary text-opacity-80 mb-[48px]">
                {contentCursos.texts.curso1.description}
              </Paragraphs>
            </MotionDivDownToUp>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-80 mb-[48px]"></Paragraphs>
          </MotionDivDownToUp>

          <div className="flex flex-col gap-4">
            <Button
              label="Inscreva-se aqui"
              className="text-white"
              icon={<FilePenLine />}
              onClick={() => {
                setModalTitle("Cadastro");
                setModalContent(<WhatsappForm />);
                setVisible(true);
              }}
            />
          </div>
        </div>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "717px", "1024px": "70vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
