interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Podgorze: React.FC<Props> = ({ className = "", style = {}, onClick }) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 458 166"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35 75.9383L28 83.9383L22 90.9383L19.8428 98.9761L12.8592 105.827L4.79179 115.226L4 122.938L2.83097 123.778L1.91941 129.282L4 134.938L3.40082 140.607L14 140.607L16.5 142.438L20 144.938L21 147.438L24 148.938L25 146.938L34 149.938L35 152.938L44 148.938L48 144.938L49 140.938L50 137.438L50 134.938L49.5 129.938L51 129.938L55.5 136.938L58 139.938L72 146.938L74 146.938L76.5 148.171L80.5 152.938L82 149.938L87.8132 151.938L91 152.938L98 155.938L103 157.438L109.298 158.438L114 158.938L116.5 160.938L120.5 160.938L125 163.938L127 160.938L124.5 157.438L127 156.938L130 161.938L134.5 159.438L136 158.938L138 155.938L142 157.938L144 159.938L145 161.938L148 160.938L147.5 158.438L152.5 153.938L158.5 146.938L162 142.938L164 138.938L173 139.938L183 143.438L200 145.938L213.5 149.938L221.036 151.737L231.5 157.438L241.5 160.938L244.5 162.938L251 162.938L255 164.438L255 155.938L254 149.938L259 141.938L258.5 131.938L258 126.938L258.5 122.938L262.566 121.938L267 119.438L270.5 117.938L274.082 118.881L282 122.938L299.5 123.938L311 122.438L321 121.69L329.5 124.938L335.5 123.938L343 123.938L361.838 132.617L368.5 135.938L371 131.438L373.953 129.438L379 125.768L388 122.438L388.5 119.438L386 114.938L395 104.438L391.835 100.438L388 100.438L387.5 92.9383L391 89.9383L396.5 85.9383L402 78.9383L405 73.4383L408.5 72.9383L412.5 76.9383L414.5 80.9383L414.5 87.4383L414.5 99.098L419.745 108.557L426.531 109.502L431 108.557L436 104.438L441.5 95.9383L446.31 89.2049L453 85.9383L456 81.9539L449 79.9383L434.5 70.9383L427.5 64.4383L419.745 55.4383L415 43.9383L408 36.692L394.5 36.692L376 41.9383L359.922 46.9451L340.414 47.5589L334 46.9451L324.065 42.7338L309 39.4383L302.5 42.4383L298 46.9451L287.359 58.0882L276.351 59.2263L271 59.2263L264.237 55.4681L258 50.9383L252 44.9383L244 41.9383L235 47.4383L228.987 62.9795L223.318 71.2444L214.848 73.7249L203.436 67.9389L187 51.9383L182 43.4383L179 35.9383L173.051 18.1213L167.654 10.0044L160 3.43829L149.81 1.50822L141.793 8.79235L138.756 17.0673L134.94 24.1131L132.762 28.9263L127.5 33.9383L115.018 38.483L110.087 38.3455L103 36.4383L96 35.9383L87 36.4383L81 38.9383L70 48.4383L65 54.4383L57.5 61.9383L51.5746 66.8986L42.4025 72.5506L39 72.5506L35 75.9383Z"
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

export default Podgorze;
