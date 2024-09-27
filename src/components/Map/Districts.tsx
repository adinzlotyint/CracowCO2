import { useState, useEffect } from "react";
import DistrictsList from "./DistrictsList";
import districtsData from "../../data/districtsData.json"; // Import the data from the JSON file

interface Props {
  mapContainerRef: React.RefObject<HTMLDivElement>;
}

const Districts = ({ mapContainerRef }: Props) => {
  const [compensation, setCompensation] = useState(0);

  interface District {
    name: string;
    forestation: string;
  }

  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
    null
  );
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleDistrictClick = (
    districtKey: string,
    event: React.MouseEvent
  ) => {
    const containerRect = mapContainerRef.current?.getBoundingClientRect();

    if (containerRect) {
      const relativeX = event.clientX - containerRect.left;
      const relativeY = event.clientY - containerRect.top;

      const districtData =
        districtsData[districtKey as keyof typeof districtsData];

      if (districtData) {
        setSelectedDistrict(districtData);
        setClickPosition({ x: relativeX, y: relativeY });
      }
    }
  };

  useEffect(() => {
    const updateCompensation = () => {
      const originalAspectRatio = 1.33;
      const originalHeight = 1190;

      const container = mapContainerRef.current;
      if (!container) return;

      const { width: containerWidth, height: containerHeight } =
        container.getBoundingClientRect();
      const containerAspectRatio = containerWidth / containerHeight;

      const aspectRatioCompensation =
        containerAspectRatio - originalAspectRatio;
      const heightCompensation = containerHeight / originalHeight;

      const combinedCompensation = aspectRatioCompensation * heightCompensation;
      setCompensation(combinedCompensation);
    };

    updateCompensation();
    window.addEventListener("resize", updateCompensation);

    return () => window.removeEventListener("resize", updateCompensation);
  }, [mapContainerRef.current]);

  const getScaledCompensation = (
    topPercentage: number,
    adjustmentFactor: number
  ) => {
    return compensation * (topPercentage / 100) * adjustmentFactor;
  };

  return (
    <>
      <DistrictsList
        getScaledCompensation={getScaledCompensation}
        handleDistrictClick={handleDistrictClick}
      />

      {selectedDistrict && (
        <div
          className="absolute border-black border bg-white p-4 shadow-xs shadow-green-500 z-50"
          style={{
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-0 right-2 text-xl font-bold"
            onClick={() => setSelectedDistrict(null)}
          >
            &times;
          </button>
          <p className="text-black text-base xl:text-lg font-bold font-['Lato'] mt-1 underline">
            {selectedDistrict.name}
          </p>
          <p className="text-black text-sm xl:text-base font-['Lato']">
            Powierzchnie zielone: &nbsp;
            <span className="text-[#91ae00] text-base xl:text-lg font-bold font-['Lato']">
              {selectedDistrict.forestation} ha
            </span>
          </p>
          <p className="text-black text-sm xl:text-base font-['Lato']">
            Pochłanianie CO₂: &nbsp;
            <p className="text-[#91ae00] text-base xl:text-lg font-bold font-['Lato']">
              {Number(selectedDistrict.forestation) * 7} ton CO₂/rok
            </p>
          </p>
        </div>
      )}
    </>
  );
};

export default Districts;
