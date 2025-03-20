import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCardVisualization from "../cards/CardFeatureVisualization";

export default function FeatureVisualization() {
  return (
    <div>
      <SectionArea className="bg-bgSectionDark">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="Cursos Anteriores"
            sectionHeaderTitle="Cursos Ministrados"
            sectionHeaderSubtitle="Saiba quais cursos tivemos em nossa unidade de cursos para não perder nenhuma oportunidade"
            color=""
            titleColorSet="text-white"
            subtitleColorSet="text-white"
          />
          <MotionDivDownToUp>
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-full gap-8 ">
                <div className="flex flex-col tablet1:flex-row tablet1:items-start items-center gap-4 desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <FeatureCardVisualization
                    imageUrl={content.texts.features.card1.img}
                    title={content.texts.features.card1.title}
                    description={content.texts.features.card1.subtitle}
                    button={false}
                  />

                  <FeatureCardVisualization
                    imageUrl={content.texts.features.card2.img}
                    title={content.texts.features.card2.title}
                    description={content.texts.features.card1.subtitle}
                    button={false}
                  />

                  <FeatureCardVisualization
                    imageUrl={content.texts.features.card3.img}
                    title={content.texts.features.card3.title}
                    description={content.texts.features.card1.subtitle}
                    button={false}
                  />

                  <FeatureCardVisualization
                    imageUrl={content.texts.features.card4.img}
                    title={content.texts.features.card4.title}
                    description={content.texts.features.card1.subtitle}
                    button={false}
                  />
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
