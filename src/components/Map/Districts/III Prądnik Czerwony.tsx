interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const PradnikCzerwony: React.FC<Props> = ({
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
        viewBox="0 0 118 182"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.2444 115.072L9.4482 116.788L11.0906 115.788L20.9482 118.749L28.9482 119.788L34.9482 122.077L44.9482 128.24L51.4482 133.288L52.9482 133.288L58.9482 141.288L64.9482 148.788L64.9482 150.788L69.4482 159.288L71.9482 166.068L74.4482 173.788L75.9482 179.788L82.4482 175.288L86.9482 172.788L88.9482 173.788L91.9231 166.068L92.9482 167.788L97.4482 159.288L98.9482 159.288L98.9482 157.788L97.9482 156.788L98.9482 154.788L100.948 153.788L102.948 155.288L102.948 151.788L105.948 150.788L104.948 140.788L105.948 138.788L107.948 137.788L107.948 134.788L105.948 132.788L102.948 120.788L103.948 118.788L107.948 116.788L106.831 111.658L105.948 107.788L104.948 106.788L103.948 103.788L100.948 103.788L100.948 101.788L101.948 100.788L100.948 98.7881L98.9482 97.7881L94.9482 92.7882L90.9482 92.7882L90.9482 89.7881L87.4482 89.7881L84.4482 90.7881L82.9482 90.2881L80.9482 81.7881L85.9482 80.7882L84.9482 72.7881L91.9482 71.7881L92.9482 69.7881L100.448 67.7881L103.948 67.7881L103.948 48.7881L104.948 47.7881L103.948 45.7881L104.948 40.2881L105.252 33.2881L108.448 31.7881L110.948 29.7881L115.948 26.2881L114.948 22.7882L111.948 24.7882L110.948 22.2882L111.948 19.2882L111.948 13.2882L112.948 8.78817L111.4 5.78817L100.948 1.78817L89.9482 10.2882L78.9482 16.2882L73.9482 22.7882L64.9482 32.7882L57.4482 39.8102L50.9482 41.7882L39.9482 53.2882L32.9482 58.7882L21.9482 73.7882L16.4482 78.9964L11.0906 89.7882L11.0906 92.2882L7.4482 100.067L2.2444 115.072Z"
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

export default PradnikCzerwony;
