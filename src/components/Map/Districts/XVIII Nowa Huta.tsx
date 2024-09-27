interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const NowaHuta: React.FC<Props> = ({ className = "", style = {}, onClick }) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 508 388"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M354.581 14.6211L360.027 28.4596L360.027 30.4596L361.027 31.4596L360.027 32.4596L360.027 34.4596L361.027 36.4596L361.027 45.9596L363.527 48.9596L366.027 51.4596L364.027 53.4596L358.027 67.9596L356.848 76.443L355.027 86.4596L354.027 97.4596L356.027 97.4596L356.027 100.46L353.027 100.46L353.027 102.46L349.027 102.46L349.027 109.46L350.027 114.46L350.148 121.46L349.027 127.46L332.027 133.46L326.527 135.96L307.027 140.46L306.027 139.46L301.527 141.46L300.027 141.46L295.027 139.46L292.027 142.46L291.027 142.46L286.027 144.46L286.027 141.46L283.027 142.46L284.027 144.46L279.027 146.46L276.027 149.46L262.027 153.46L261.027 154.46L255.527 156.46L253.027 156.46L254.027 160.46L249.527 161.46L242.527 158.46L235.027 153.46L213.527 144.96L195.027 138.46L186.027 138.46L175.027 141.46L176.027 146.46L173.027 151.46L167.527 154.96L152.027 169.46L138.027 180.46L132.527 186.96L128.027 190.46L127.027 193.96L127.027 198.46L120.027 200.46L103.027 209.46L92.0274 213.46L89.5274 206.46L86.5274 197.96L79.0274 190.46L69.5274 183.96L68.0274 183.46L65.0274 181.46L63.0274 181.594L60.0274 176.46L57.0274 173.46L43.9065 186.363L36.0274 194.46L32.0274 198.46L30.2692 195.242L28.0274 195.242L26.0274 200.96L16.0274 211.46L14.0274 214.46L8.02739 220.46L5.02739 223.46L1.02739 225.46L1.02739 229.46L2.0275 231.46L3.5275 231.46L5.0275 232.46L7.0275 230.46L13.0275 230.46L24.0275 232.46L26.0275 233.46L28.0275 233.46L33.0275 234.46L34.0275 236.46L33.0275 239.46L35.0275 243.46L38.0275 245.46L36.5275 249.46L34.5275 251.96L33.0275 254.46L34.0275 257.46L34.0275 260.46L33.0275 262.46L37.0275 265.46L40.0275 269.46L45.0275 271.46L50.0275 272.46L49.0275 270.46L62.0275 276.46L62.0275 280.46L65.0275 280.46L64.5275 284.46L66.0275 283.96L64.5275 290.96L57.0275 295.96L59.0275 298.46L55.1112 301.96L51.0275 309.46L69.5275 322.46L79.0275 322.46L82.0275 327.96L96.5275 330.96L107.527 335.92L119.027 335.92L136.527 334.96L149.527 330.96L170.027 324.46L182.527 323.46L188.027 327.96L194.027 334.96L197.027 343.96L200.027 354.96L198.642 360.46L200.027 366.96L204.027 371.96L209.027 376.96L213.527 378.96L221.027 378.96L226.527 375.46L231.027 372.96L242.527 372.96L252.027 372.96L259.027 375.46L266.927 381.55L276.027 386.46L281.527 386.46L286.527 383.96L291.527 374.46L299.027 362.46L304.527 358.96L310.027 356.96L318.527 357.96L331.527 364.46L346.527 370.96L358.527 371.96L369.527 370.46L382.527 365.46L395.027 359.46L419.527 348.46L429.027 345.96L436.527 345.96L445.527 348.46L450.527 352.46L455.027 356.96L460.027 362.46L465.527 365.96L473.527 368.46L480.027 367.028L484.527 364.96L489.527 358.96L493.027 344.46L497.527 335.46L503.027 325.96L506.527 321.96L505.027 319.96L494.527 302.96L485.527 282.96L480.527 271.46L473.527 266.96L468.027 263.46L461.527 258.46L460.527 253.46L457.373 249.46L452.527 247.46L446.027 242.46L446.027 232.96L451.527 224.46L461.027 222.46L461.027 220.96L457.373 218.96L453.527 215.46L451.527 207.46L447.027 202.46L443.527 193.96L440.527 189.96L438.527 187.96L437.527 185.46L437.527 179.96L435.027 173.46L429.027 172.96L426.027 171.46L425.027 167.96L433.527 166.46L437.042 165.156L439.527 162.96L445.527 159.96L442.527 138.96L442.527 114.46L443.527 102.96L445.027 91.4596L446.027 85.9596L448.027 81.4596L451.527 74.9596L451.527 68.4596L454.027 62.4596L458.527 60.9596L461.027 57.4596L469.527 47.9596L476.027 47.9596L477.527 43.9596L481.527 36.4596L484.527 29.4596L473.527 27.4596L472.527 23.9596L472.527 19.9596L468.527 20.4596L467.027 19.9596L466.714 13.7205L466.714 6.4142L465.027 7.45957L462.027 6.4142L459.027 9.95957L456.788 10.339L456.027 12.9596L454.527 15.4596L452.027 14.9596L446.527 11.4596L442.527 12.4596L440.027 18.4596L436.527 18.4596L433.027 17.4596L431.026 19.657L429.527 21.9596L428.527 23.4596L427.027 23.4596L420.527 19.4596L418.527 24.4596L412.527 21.4596L410.527 15.9596L402.527 10.9596L400.527 12.4596L398.027 13.9596L396.527 13.9596L394.768 7.25341L389.672 6.99476L383.527 6.45957L377.527 6.45957L377.325 1.01485L367.027 1.01481L363.027 1.45961L362.027 3.95961L357.527 8.95961L354.581 14.6211Z"
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

export default NowaHuta;
