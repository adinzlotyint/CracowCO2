interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Biezanow: React.FC<Props> = ({ className = "", style = {}, onClick }) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 256 174"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 39L23 42L17 44.5L14 39.5L12 41L14 44.5L12 47L18 54L14 59L13 62.5V72.5L14 75L13 85L11.5 88L9 89L2 92L3 94H5L6.5 95H9L13 96H21.5L23.5 97L27.5 96H46L48 95H49L49 98.5L49.5 102.5L52 104L48 105L48 107L46.5 109L48.5 114.5L53 119.5L63 128L65 131.5L68 135L74 144.5L75 149L79 150.5L75 155L72.0921 156V159L71 161L81 160.5L84.5 159.5L86.5 154.5L93.5 152.5L98.5 150.5L103.5 150L111 148.5L116.5 146L118.5 146.5L119.5 152.5L128 151.5L131.5 152.5L134.5 157.5L140 167L142.5 170L144.5 170.5L145.5 168.5L144.586 166L143.5 164.5V161.5H146.5H151L156.5 160.578L161.5 160L166.5 161.5L168.5 164.5L172 167.5L177 169L181.5 170L187 170.5L191.05 171.805L190.649 162.714L191.5 152.5L192 147.5L197 146L202.667 148.273L207 147.5L209.5 144L215.5 143.5L217.085 140.789L218.5 140L224.5 140.5L226.5 138L228 134.5L227 130.5L230.5 128L234.707 129.019L239.5 122.5L241 117.5V109L242.318 101.209L245.5 85.9999L246 77.9999L244 70.4999L242.5 64.4999L239.5 61.9999L235.5 55.9999L234.5 53.4999V51.4999L241.5 46.4999L242 43.4999L243.5 40.4999L245.5 36.9999L249.5 31.4999L253.533 25.2574L254.5 20.4999L253.5 17.4999L243 12.4999L230 6.99988H222.5L217 8.4999L208 4.99998L200 4.99997L192 5.49995L187.5 6.99997L178 5.99998L169.5 5.99999L165.5 4.5L161.5 1H156L149.5 5L145 6L146 16.5V24.5L143 28.5L141 33.5L142 38.5V47.5L138 46H132L127 44L117.5 39.5L108 34L104 34.5L94 31.5L92.5 30L83.5 28L78.5 28.5L71.5 27L70.5 26L61.5 23.5L51 21.5L50.5 23.5L38 39L34 41.5L35 44L33 45.5L31.5 44L29.5 41L25 39Z"
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

export default Biezanow;
