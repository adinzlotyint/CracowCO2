import React from "react";

interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Lagiewniki: React.FC<Props> = ({
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
        viewBox="0 0 100 137"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87 132L85 134L83.5 133.083L72.5 134L68 132.5L66.5 135L64 133.083H62.5V132L64 130L66.5 128.5L69 125V123L72 118L74 112.5L72 106L67.5 106.5V108.5L66 109H56.4817L50 110L38.5 108L32 109.5L27 108L23.5 104L19 99.0001H7L3 103.5L2 100L4 96.5001L3 93.0001L4.01123 89.2261L6 84.5001L7.5 80.0001L9.00002 75.0001L12 68.5001V66.0001L18 54.5001V52.0001L19 49.5001L20.5 46.5001L23 44.0001L33 39.0001L35 36.0001L40 33.5001V30.0001L41 26.0001L40 24.0001V19.0001L48 22.0001L47.5 24.0001L49 25.0001L50 20.0001L52 16.5001L50.5 14.5001L52 12.0001L50 10.0001L50.5 7.50002L52 5.50002L54 1.00002L66 1L71.5 4.5L73 7L75.7082 9L77 7L86 10L87.5 13L96 9L98.9352 31.464V36V42L98 51V59V63V71L96.5338 73L98 81L97 82V85L95.5 86.5L95 90.5V96.1821L98 111L97 117L94 117.5L90.5 123.5L87 132Z"
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

export default Lagiewniki;
