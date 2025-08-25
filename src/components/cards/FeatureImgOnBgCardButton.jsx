import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function FeatureImgOnBgCardButton(props) {
  const {
    imgSrc,
    title,
    description,
    buttonLabel,
    buttonLink,
    buttonColor = "bg-primary",
  } = props;

  FeatureImgOnBgCardButton.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
  };

  const handleWhatsAppClick = () => {
    if (buttonLink) {
      window.open(buttonLink, "_blank");
    }
  };

  return (
    <MotionDivDownToUp className="flex flex-col w-full max-w-[430px]  tablet1:w-[47%] desktop1:w-[325px]">
      {/* Imagem no topo */}
      <div
        className="w-full h-[400px] rounded-2xl bg-bottom bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>

      {/* Conteúdo branco abaixo da imagem */}
      <div className="bg-white rounded-b-2xl p-6 shadow-md flex flex-col gap-4">
        <h1 className="font-mainFont font-medium text-[18px] desktop1:text-paragraph5 desktop2:text-[20px]">
          {title}
        </h1>
        <p className="font-secondFont text-paragraph3 desktop1:text-paragraph4 text-quaternary">
          {description}
        </p>
        <Button
          removeAnchor={true}
          label={buttonLabel}
          color={buttonColor}
          size="small"
          onClick={handleWhatsAppClick}
          icon={<FaWhatsapp size={16} />}
        />
      </div>
    </MotionDivDownToUp>
  );
}
