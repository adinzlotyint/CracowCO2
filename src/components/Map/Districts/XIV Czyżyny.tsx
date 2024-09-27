interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Czyzyny: React.FC<Props> = ({ className = "", style = {}, onClick }) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 170 206"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M167.874 170.961L163.374 173.461L157.374 177.673L151.874 185.014L144.374 189.977L135.374 191.461L129.874 188.961L122.874 185.014L117.874 178.961L109.374 172.961L100.874 172.961L96.8743 177.673L90.8743 189.977L86.3743 202.448L79.3743 204.961L67.9207 202.448L52.1393 185.014L44.7018 170.069L37.5352 152.63L32.1386 144.513L24.32 137.034L13.8745 134.961L10.8411 130.918L5.37451 126.461L1.87451 123.461L6.37438 118.961L10.7497 116.642L13.8744 115.961L17.3744 113.961L18.3744 111.961L17.3744 101.961L16.3744 99.9611L17.3744 98.9611L13.3744 91.9611L6.37438 84.9611L9.37438 79.9611L10.3744 80.4611L10.3744 78.9611L9.37438 77.9611L9.87438 75.9611L12.3744 74.9611L14.3744 75.9611L14.3744 72.9611L17.3744 71.9611L16.3744 61.9611L17.3744 59.9611L19.4268 58.9611L19.4268 55.9611L17.3744 53.9611L14.3744 41.9611L15.3744 39.9611L19.3744 37.9611L18.183 31.9611L16.716 28.4611L15.3744 24.9611L12.3744 24.9611L12.3744 22.9611L13.3744 22.4611L12.3744 19.9611L10.3744 18.9611L6.37438 13.9611L2.37438 13.9611L2.37431 9.96105L8.37431 8.46105L19.9851 6.33319L22.3743 4.96104L30.3743 3.96106L33.8743 4.96104L38.8743 3.96106L43.3743 3.96106L49.3067 2.64432L55.3743 1.96104L55.3743 3.96106L68.3743 9.46107L75.3743 11.4611L80.3743 13.9611L76.3743 26.9611L86.3743 32.9611L86.3743 40.9611L85.3743 46.4611L88.3743 45.9611L95.3743 49.4611L95.3743 51.9611L100.874 54.9611L100.374 57.9611L91.8743 66.9611L87.3743 68.6483L87.3743 73.4611L88.8743 74.9611L91.2988 75.9611L93.3743 73.9611L99.3743 73.9611L110.374 75.9611L112.374 76.9611L114.374 76.9611L119.374 77.9611L120.374 79.9611L119.483 82.9611L121.374 86.9611L124.374 88.9611L122.374 93.9611L120.874 94.9611L119.374 97.4611L120.374 100.961L120.374 102.961L119.483 105.961L123.374 108.961L126.374 112.961L135.874 115.961L135.374 113.961L148.374 119.961L148.374 123.961L151.374 123.961L150.874 127.961L152.603 127.961L151.874 133.961L142.874 140.461L145.874 141.961L140.874 146.461L137.874 152.461L149.874 161.961L157.874 165.961L161.874 165.961L165.119 167.026L167.874 170.961Z"
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

export default Czyzyny;
