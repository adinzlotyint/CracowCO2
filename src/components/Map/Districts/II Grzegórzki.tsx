interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Grzegorzki: React.FC<Props> = ({
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
        viewBox="0 0 108 140"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.161 91.3655L96.1611 95.8655L91.1611 100.865L88.1611 108.865L83.1611 114.674L76.6611 120.365L73.1611 120.365L63.6611 127.365L57.1611 127.365L48.6611 124.194L39.6611 124.194L37.1611 125.365L27.6611 129.865L18.1613 137.865L12.6613 129.365L9.16126 123.865L6.66111 121.365L6.66111 119.365L4.66125 114.365L3.66126 113.365L2.6612 103.365L1.66122 101.365L2.66126 99.8654L2.66126 94.3654L1.66129 93.3654L2.6612 91.3655L2.66126 79.8655L1.66126 75.3655L2.66126 72.8655L1.66126 69.3655L6.66126 69.3655L7.16126 61.8655L8.66126 59.8655L8.66126 53.3655L13.6613 55.3655L15.2943 50.7055L20.0843 37.9298L28.6613 18.8654L36.1613 1.86549L44.6611 6.36544L51.1611 12.3654L52.1611 10.8654L53.6611 12.3654L57.6611 18.8654L61.6611 24.3654L64.6611 26.8654L64.6611 29.8654L67.1611 34.3654L69.6611 38.3654L71.3479 43.8708L73.6611 50.8654L75.6611 58.3654L82.1611 53.3654L83.6611 53.3654L86.6611 51.3654L88.6611 52.6549L91.6611 45.3654L92.6611 46.3654L94.6611 42.3654L101.661 49.3654L105.661 56.3654L104.661 56.8654L105.661 62.3655L106.661 69.3655L105.661 70.8655L95.6611 75.8655L91.1611 79.8655L91.1611 81.8655L97.4722 86.9694L100.161 91.3655Z"
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

export default Grzegorzki;
