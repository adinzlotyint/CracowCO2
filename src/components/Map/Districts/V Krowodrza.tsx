interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Krowodrza: React.FC<Props> = ({
  className = "",
  style = {},
  onClick,
}) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 153 114"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.573 19.6952L148 25.1475L144.5 26.6475L137 31.6475L134 37.1475L128.5 44.1475L119.5 45.1475L110.365 53.13L102 61.1475L96.8803 76.6475L95 86.6475L93.5 96.6475L96.8803 111.844L69.431 104.148L50.2718 97.6475L41 96.6475L31.7735 87.5065L16.1474 79.0445L1.78857 71.9269L2.16864 62.3101L3.38637 53.9908L6.10006 51.7738L20.4095 53.6852L34 57.6475L42.5 60.1475L44.3104 54.3579L47 37.1475L50.2718 29.9649L55.5482 3.55296L69.431 3.05778L86.5 3.55296L105 1.14752L119.5 1.14752L140 6.14752L151.5 9.14752L150.5 13.1475L149.573 19.6952Z"
          className="hover:cursor-pointer hover:fill-[rgba(0,128,0,0.2)] transition-all duration-300 ease-in-out"
          style={{ pointerEvents: "auto" }}
          onClick={(event: React.MouseEvent) => {
            onClick(event);
          }}
        />
      </svg>
    </div>
  );
};

export default Krowodrza;
