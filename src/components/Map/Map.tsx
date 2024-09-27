import { useState, useEffect, useRef } from "react";
import Krkmap from "../../assets/Map/krkmap.tsx";
import Districts from "./Districts.tsx";
import ClickIcon from "./ClickIcon.tsx";

const Map = () => {
  const [availableHeight, setAvailableHeight] = useState(0);
  const mapContainerRef = useRef<HTMLDivElement>(null); // Reference to the map container

  // Calculate the available height between header and footer
  useEffect(() => {
    const updateAvailableHeight = () => {
      const headerHeight = document.querySelector("header")?.clientHeight || 0;
      const footerHeight = document.querySelector("footer")?.clientHeight || 0;
      const viewportHeight = window.innerHeight;
      const height = viewportHeight - headerHeight - footerHeight;
      setAvailableHeight(height);
    };

    // Calculate on mount and window resize
    updateAvailableHeight();
    window.addEventListener("resize", updateAvailableHeight);

    return () => {
      window.removeEventListener("resize", updateAvailableHeight);
    };
  }, []);

  return (
    <div className="grid grid-cols-[minmax(0px,1fr)_auto_minmax(0px,1fr)] h-full w-full bg-leaves">
      <div className="col-start-2 flex items-center justify-center relative">
        <div className="relative w-full " style={{ height: availableHeight }}>
          <div ref={mapContainerRef} className="relative w-full h-full">
            <ClickIcon />
            <Krkmap className="w-full h-full" />
            <Districts mapContainerRef={mapContainerRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
