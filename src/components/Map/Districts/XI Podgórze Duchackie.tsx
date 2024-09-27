interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const PodgorzeDuchackie: React.FC<Props> = ({
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
        viewBox="0 0 176 159"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103 32.5L109 37L112.5 42L107.5 49.5V60.5L108.5 62.5V70L106.5 74.5L103.5 77L96.5 80L98 82H99.5L101.5 83H103.5L107.5 84H116.5L117.5 85L122 84H134H139.5L143 83L144 88.5L146 91.5L143 93.5L141 97L142 101L145.5 105.5L148.464 108.151L156.5 115L159 119L163.5 124.5L168 132L169.5 136.5L173.5 139L170.092 142.388L166.5 144V146.5L165.5 148.5L167.5 150L164.5 151L160.5 152.015H157L149.5 154H136.5L134 155L129.5 154.5H122L120.5 152.015L99 150L97.5 148.5L96 151.5L94.5 149.5L91 151L88.5 148H79.5L70.7614 151L70.5 154H60L46 156L43.5 154.5L32 153L31.5 154L28 153L26 155L23.5 154H18.5L16 155L12 157L8.5 154.5H6.5L4 153L3 149.5L2 145L12.5 143.5L14 145L16 144L19.5 136.5L23 129.5L26 128.5L27.5057 123.5V120.5L26 114L24.5 106.5V99.5L26.5 96V93L28 92L27 88.5L26.5 84.5L28 82L27.5057 69.5V64L28 59.5L28.5 52.5V42.9046L26.5 29.5L25.5 20.5L29.5 16L31.5 8.00002V1H33L34.715 5.00002L38.5 9.50002L39.5 11L53.5 18H55.5L59.5 21L62 24.5L63.5 21L72.5 24L78.5 27L80 26.5L82.5 28L90.5 29L95.5 30L98.5 32L103 32.5Z"
          style={{ pointerEvents: "auto" }}
          className="hover:cursor-pointer hover:fill-[rgba(0,128,0,0.2)] transition-all duration-300 ease-in-out"
          onClick={(event: React.MouseEvent) => {
            onClick(event);
          }}
        />
      </svg>
    </div>
  );
};

export default PodgorzeDuchackie;
