interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Bienczyce: React.FC<Props> = ({
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
        viewBox="0 0 136 94"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.0165 38.1328L10.5 43.379L20 45.879L26 48.879L22.5 61.879L32 67.879L32 73.8909L31 81.379L34 80.879L41 84.6363L41 87.379L47 90.879L53.5 83.879L58 79.379L60 73.8909L62.5 73.8909L64.5 76.879L69 71.879L77 63.379L89 51.879L93 56.379L95 59.6066L97.5 59.6066L100 61.879L101.5 61.879L111.5 69.379L118.5 76.379L124 91.879L133 88.879L134.5 87.879L134 83.379L125.5 70.379L127.143 66.879L127.143 57.879L125 57.879L123 58.879L117 58.879L114.5 56.379L112.411 50.879L109.5 41.879L111.5 33.879L108.5 31.879L105.735 30.1025L99.5 30.879L91 30.879L84.5 29.379L76.3381 25.3644L74 23.879L76.3381 20.379L77 16.879L78 13.879L76.3381 11.6232C76.3381 11.6232 67.3262 11.504 65.2794 11.6232C63.2379 11.7422 58.683 11.0207 58.683 11.0207L49.3708 6.10576L43.8006 1.96629L37.2038 1.35721L29.3442 7.27266L19.3218 18.2749L2.0165 38.1328Z"
          className="hover:cursor-pointer hover:fill-[rgba(12,174,1,0.3)] transition-all duration-300 ease-in-out"
          style={{ pointerEvents: "auto" }}
          onClick={(event: React.MouseEvent) => {
            onClick(event);
          }}
        />
      </svg>
    </div>
  );
};

export default Bienczyce;
