interface Props {
  className?: string; // Allow dynamic className for additional styling
  style?: React.CSSProperties; // Allow passing custom styles for position/size
  onClick: (event: React.MouseEvent) => void; // Handle click event
}

const Stare: React.FC<Props> = ({ className = "", style = {}, onClick }) => {
  return (
    <div
      className={`absolute ${className}`} // Allows positioning with custom styles
      style={style}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 95 173"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.5921 146.848L70.625 154.456L64.733 162.048L59.9659 166.437L52.4686 171.348L43.4686 171.348L37.9686 168.348L28.9686 149.848L23.4686 134.848L22.4686 128.848L19.4686 126.348L15.9686 126.848L12.9686 127.848L8.80449 112.848L6.96859 105.848L1.9686 90.8484L3.46858 80.3484L3.96858 74.3484L5.96857 68.8484L7.96858 61.0362L10.9686 53.3484L17.4686 46.3484L25.9686 40.3484L28.9686 37.8484L38.8364 36.8484L42.4686 30.8484L45.4686 25.8484L47.4686 23.3484L50.9686 21.8484L56.4686 18.3484L56.9686 16.3484L57.4686 13.3484L57.9686 7.84841L60.9686 1.84842L68.4686 3.84842L70.4686 2.84842L78.9686 5.84842L87.4686 6.84842L87.4686 9.84842L93.4686 13.3484L87.4686 29.8484L78.5921 48.2604L72.9686 63.8484L68.4686 61.8484L67.9686 67.8484L65.9686 77.3484L61.867 77.7969L62.4686 81.8484L61.8572 83.8484L62.9686 92.3484L61.8572 101.348L62.4686 103.348L62.4686 107.848L61.4686 109.348L62.4686 112.848L63.4686 121.848L65.9686 126.348L66.4686 129.348L72.9686 138.348L78.5921 146.848Z"
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

export default Stare;
