import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";
import DocumentButtonFeatureCard from "./CardDocuments";
import Doc from "../../assets/imgs/doc/docs.png";
import Certificado from "../../assets/imgs/doc/CertificadodeRegistroEmpresarial.pdf";
// import Conselho from "../../assets/imgs/doc/ConselhoRegionaldeAdministraçãodoRS.pdf";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function DownloadArchives() {
  return (
    <div>
      <SectionArea className="bg-neutral-100" paddingtop={false}>
        <SectionShapeDiv
          shapeDivArrow={false}
          paddingbot={false}
          shapeColor="text-bgSectionDark"
        />
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="DOWNLOADS"
            sectionHeaderTitle="Acessos Documentais"
            sectionHeaderSubtitle="Acesse e baixe facilmente os documentos oficiais de negativa com total transparência e praticidade."
            color="dark"
          />

          <div className="flex flex-wrap gap-4 justify-center w-full ">
            <DocumentButtonFeatureCard
              img={Doc}
              title="Certificado de Registro Empresarial"
              paragraph="Documento que comprova o registro oficial da empresa nos órgãos competentes."
              link={Certificado}
              className="w-full desktop1:w-auto"
            />
            {/* <DocumentButtonFeatureCard
              img={Doc}
              title="Conselho Regional de Administração do RS"
              paragraph="Certidão de regularidade emitida pelo CRA-RS, validando o exercício legal da empresa."
              link={Conselho}
              className="w-full desktop1:w-auto"
            /> */}
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
