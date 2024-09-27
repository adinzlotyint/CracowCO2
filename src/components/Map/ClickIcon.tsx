import React from "react";
import { MdAdsClick } from "react-icons/md";

const ClickIcon: React.FC = () => {
  return (
    <>
      {/* Animowana ikona kliknięcia */}
      <div className="absolute top-[12px] left-[18px] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-black animate-clickEffect"></div>
      <MdAdsClick className="absolute top-[4px] left-[10px] w-8 h-8 sm:w-10 sm:h-10 text-black opacity-60" />

      {/* Tekst "Kliknij na dzielnice..." */}
      <div className="absolute top-[12px] left-[60px] text-sm sm:text-lg font-['Lato'] font-bold text-black opacity-70">
        Kliknij na dzielnicę, by poznać więcej informacji
      </div>
    </>
  );
};

export default ClickIcon;
