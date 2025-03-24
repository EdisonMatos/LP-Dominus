import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Hero({ appDownloadButtons }) {
  return (
    <div
      className="w-full bg-center bg-cover font-mainFont"
      id="home"
      style={{
        backgroundImage: `url(${content.texts.hero.heroImg})`,
      }}
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-0 items-center">
        <div className="w-full text-secondary justify-center">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex flex-col-reverse gap-[40px] w-[90%] desktop1:flex-row desktop1:justify-center  mx-auto max-w-[1000px] items-center pb-[64px] pt-[40px] desktop1:pt-[68px] desktop1:pb-[96px]">
            <div className="flex flex-col w-full desktop1:w-[60%]">
              {/* <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                  <p className="mb-[16px] bg-bgSectionDark text-white bg-opacity-100 rounded-md px-[16px] py-[6px] inline-block text-paragraph2">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp> */}
              <MotionDivDownToUp>
                <div className="text-lighter flex justify-center  desktop1:justify-center font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                  <h1 className="text-center">{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-center font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-lighter mb-[32px] text-center opacity-100 ">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>
              <div className="w-full phone2:w-full tablet2:w-auto">
                {/* <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    buttonLink={whatsappContactLink}
                    animation
                    className="w-[100%] text-white"
                    icon={<FaWhatsapp size={24} />}
                  />
                </div> */}
                <MotionDivDownToUp>
                  <div className="flex justify-center desktop1:justify-center">
                    <div className="flex flex-col items-center desktop1:flex-row text-primary">
                      {content.texts.hero.obsHero.icon}
                      <p className="text-white opacity-100 ml-[10px] text-center mt-[12px] desktop1:mt-0">
                        {content.texts.hero.obsHero.text}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>
                {appDownloadButtons && (
                  <MotionDivDownToUp>
                    <div className="flex flex-col items-center desktop1:items-start">
                      <p className="mb-[20px] mt-[60px] text-lighter opacity-80 text-center">
                        {content.texts.hero.app.description}
                      </p>
                      <div className="">
                        {" "}
                        <div className="flex items-start gap-[20px]">
                          <a
                            href={content.texts.hero.app.imgs.appStore.link}
                            target="_blank"
                            className="transition hover:scale-110 opacity-80 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.appStore.img}
                              alt={content.texts.hero.app.imgs.appStore.alt}
                              className=""
                            />
                          </a>
                          <a
                            href={content.texts.hero.app.imgs.playStore.link}
                            target="_blank"
                            className="transition hover:scale-110 opacity-80 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.playStore.img}
                              alt={content.texts.hero.app.imgs.playStore.alt}
                              className=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
