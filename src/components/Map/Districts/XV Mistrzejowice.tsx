interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Mistrzejowice: React.FC<Props> = ({
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
        viewBox="0 0 154 108"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128.1 13.9113L131.713 13.0204L137.1 2.02037L142.352 1.52036L145.6 12.5204L151.1 13.0204L152.1 15.0204L146.6 18.0204L140.1 19.8878L141.6 25.5204L143.1 29.0204L143.1 30.5204L141.1 32.5204L141.1 35.0204L139.077 37.3163L137.1 42.5204L134.6 42.5204L131.713 44.6865L131.1 48.0204L131.713 50.5204L134.6 51.5204L135.6 54.5204L137.1 58.5204L137.1 61.3284L138.908 65.5204L135.6 68.5204C135.6 68.5204 131.636 71.4752 129.589 71.5944C127.548 71.7134 122.993 70.9919 122.993 70.9919L113.681 66.077L108.11 61.9375L101.514 61.3284L93.654 67.2438L83.6317 78.2461L66.6001 96.5204L56.6001 97.5204L42.1001 99.5204L39.6001 98.0204L33.6001 99.5204L16.1001 103.52L9.60012 105.52L4.60012 106.52L2.10022 97.5204L7.10022 96.5204L6.10022 88.0204L13.1002 87.5204L14.1002 85.5204L19.1002 84.0204L25.1002 83.5204L25.1002 65.0204L26.1002 63.5204L25.1002 61.0204L26.1002 55.5204L25.8834 49.2067L30.5687 47.0204L37.1002 42.0204L36.4157 38.5204L33.179 40.5204L31.525 38.5204L33.179 35.0204L33.179 27.5204L34.1002 24.5204L33.179 21.5204L21.838 17.3632L28.0149 16.0204L39.6002 8.72222L53.6002 7.02037L75.1002 8.72222L92.6002 8.72222L106.544 13.9113L114.686 19.8878L117.1 22.5204L127.1 19.8878L128.1 13.9113Z"
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

export default Mistrzejowice;
