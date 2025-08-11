import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function CourseCard(props) {
  const {
    imgSrc,
    title,
    subtitle,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
  } = props;

  CourseCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
  };

  return (
    <MotionDivDownToUp className="w-full max-w-[290px] bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Topo com imagem que vem via props */}
      <div className="w-full h-[360px] flex items-center justify-center bg-gray-200">
        <img
          src={imgSrc}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-primary font-bold text-lg leading-5">{title}</h2>
        <Button
          removeAnchor={false}
          label={buttonLabel}
          buttonLink={buttonLink}
          color={buttonColor}
          size="small"
          onClick={onClick}
        />
      </div>
    </MotionDivDownToUp>
  );
}
