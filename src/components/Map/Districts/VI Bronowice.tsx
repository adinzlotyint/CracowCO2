interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Bronowice: React.FC<Props> = ({
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
        viewBox="0 0 191 156"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M133.054 147.859L135.054 149.859L134.554 153.859L130.054 152.859L123.898 152.327L121.982 151.964L114.054 145.859L108.054 140.359L102.554 136.359L98.5544 133.359L95.9593 131.791L90.0544 130.859L84.0544 130.859L79.5544 126.359L78.5544 125.359L71.5544 123.359L65.0544 114.359L60.0544 108.859L56.5544 108.859L53.0544 108.859L48.0544 103.993L44.0544 102.859L39.0544 103.359L31.7048 103.993L25.8447 100.073L19.3126 90.6496L12.8056 81.6563L8.355 71.6869L7.55438 67.8591L8.98444 64.4019L8.05438 58.8591L5.05438 54.8591L1.65348 53.3258L8.05438 44.8591L17.5701 36.6272L26.3392 36.1163C26.3392 36.1163 30.3231 32.0476 32.0294 31.0919C33.7306 30.1431 41.552 25.426 41.552 25.426L50.7455 26.1713L60.0624 29.0337L68.0482 33.2612L70.0544 29.3592L75.0544 17.3592L83.5544 2.85915L86.5544 8.85915L98.5544 20.3591L106.054 29.0337L116.054 39.8592L131.358 50.8794L141.149 55.8513L145.193 57.8591L143.554 63.3592L143.554 76.8713L151.054 76.8713L155.554 74.8591L165.054 76.8713L166.554 77.8591L178.054 80.8591L182.554 80.8591L189.054 81.8591L186.054 89.3591L183.054 102.859L183.054 104.859L180.054 114.359L177.054 130.359L175.054 139.859L167.554 137.359L155.054 133.859L152.554 132.623L138.358 129.859L137.141 131.97L135.554 130.359L135.054 133.859L134.054 135.145L134.054 137.859L133.054 139.359L133.054 147.859Z"
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

export default Bronowice;
