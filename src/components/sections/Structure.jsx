import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Structure() {
  return (
    <div>
      <SectionArea className="squares">
        <SectionShapeDiv
          shapeDivArrow={false}
          paddingbot={false}
          shapeColor="text-bgSectionDark"
        />
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="NOSSA ESTRUTURA"
            sectionHeaderTitle="Conheça o espaço onde grandes resultados acontecem"
            sectionHeaderSubtitle="Infraestrutura planejada para oferecer conforto, agilidade e excelência em cada atendimento."
            color=""
          />
          <iframe
            width="100%"
            height="315"
            src="https://youtube.com/shorts/mPrQCQBGXhs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-md desktop1:max-w-[50%]"
          ></iframe>

          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4yK79ZwffGI?si=cYLyENMgOy1t5fwG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-md desktop1:max-w-[50%] mt-8"
          ></iframe>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
