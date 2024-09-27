import Podgorze from "./Districts/XIII Podgórze";
import Stare from "./Districts/I Stare Miasto";
import Grzegorzki from "./Districts/II Grzegórzki";
import PradnikCzerwony from "./Districts/III Prądnik Czerwony";
import PradnikBialy from "./Districts/IV Prądnik Biały";
import Krowodrza from "./Districts/V Krowodrza";
import Bronowice from "./Districts/VI Bronowice";
import Biezanow from "./Districts/XII Bieżanów–Prokocim";
import PodgorzeDuchackie from "./Districts/XI Podgórze Duchackie";
import Czyzyny from "./Districts/XIV Czyżyny";
import Mistrzejowice from "./Districts/XV Mistrzejowice";
import Bienczyce from "./Districts/XVI Bieńczyce";
import WzgorzaKrzeslawickie from "./Districts/XVII Wzgórza Krzesławickie";
import NowaHuta from "./Districts/XVIII Nowa Huta";
import Lagiewniki from "./Districts/IX Łagiewniki – Borek Fałęcki";
import Zwierzyniec from "./Districts/VII Zwierzyniec";
import Debniki from "./Districts/VIII Dębniki";
import Swoszowice from "./Districts/X Swoszowice";

interface Props {
  getScaledCompensation: (
    originalHeight: number,
    compensation: number
  ) => number;
  handleDistrictClick: (district: string, event: React.MouseEvent) => void;
}

const DistrictsList = ({
  getScaledCompensation,
  handleDistrictClick,
}: Props) => {
  return (
    <>
      <Stare
        className="absolute left-[32.6%] w-[7.6%] h-[auto] hover:z-10"
        style={{
          top: `calc(34.3% - ${getScaledCompensation(34.3, 409)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("StareMiasto", e)}
      />
      <Grzegorzki
        className="absolute left-[37.2%] w-[8.8%] h-[auto] hover:z-10"
        style={{
          top: `calc(35.2% - ${getScaledCompensation(34.3, 389)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Grzegorzki", e)}
      />
      <PradnikCzerwony
        className="absolute left-[37.2%] w-[9.5%] h-[auto] hover:z-10"
        style={{
          top: `calc(22.3% - ${getScaledCompensation(34.3, 720)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("PradnikCzerwony", e)}
      />
      <PradnikBialy
        className="absolute left-[20.2%] w-[25.4%] h-[auto] hover:z-10"
        style={{
          top: `calc(11.6% - ${getScaledCompensation(34.3, 999)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("PradnikBialy", e)}
      />
      <Lagiewniki
        className="absolute left-[29.2%] w-[8%] h-[auto] hover:z-10"
        style={{
          top: `calc(59.8% - ${getScaledCompensation(59.8, -148)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("LagiewnikiBorekFalecki", e)}
      />
      <Krowodrza
        className="absolute left-[25.5%] w-[12%] h-[auto] hover:z-10"
        style={{
          top: `calc(33.7% - ${getScaledCompensation(34.3, 424)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Krowodrza", e)}
      />
      <Bronowice
        className="absolute left-[14.9%] w-[15%] h-[auto] hover:z-10"
        style={{
          top: `calc(25.3% - ${getScaledCompensation(34.3, 630)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Bronowice", e)}
      />
      <Zwierzyniec
        className="absolute left-[8.4%] w-[25.3%] h-[auto] hover:z-10"
        style={{
          top: `calc(30.6% - ${getScaledCompensation(30.7, 570)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Zwierzyniec", e)}
      />
      <Debniki
        className="absolute left-[6.6%] w-[30%] h-[auto] hover:z-10"
        style={{
          top: `calc(47.3% - ${getScaledCompensation(47.3, 49)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Debniki", e)}
      />
      <Swoszowice
        className="absolute left-[25%] w-[30%] h-[auto] hover:z-10"
        style={{
          top: `calc(70.1% - ${getScaledCompensation(70.1, -255)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Swoszowice", e)}
      />
      <PodgorzeDuchackie
        className="absolute left-[34.9%] w-[14%] h-[auto] hover:z-10"
        style={{
          top: `calc(58.5% - ${getScaledCompensation(58.5, -131)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("PodgorzeDuchackie", e)}
      />
      <Biezanow
        className="absolute left-[42.4%] w-[20.3%] h-[auto] hover:z-10"
        style={{
          top: `calc(57.5% - ${getScaledCompensation(58.5, -115)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("BiezanowProkocim", e)}
      />
      <Podgorze
        className="absolute left-[33.3%] w-[36.5%] h-[auto] hover:z-10"
        style={{
          top: `calc(44.8% - ${getScaledCompensation(58.5, 80)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Podgorze", e)}
      />
      <Czyzyny
        className="absolute left-[44.2%] w-[13.8%] h-[auto] hover:z-10"
        style={{
          top: `calc(30.5% - ${getScaledCompensation(58.5, 300)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Czyzyny", e)}
      />
      <Mistrzejowice
        className="absolute left-[43.5%] w-[12.5%] h-[auto] hover:z-10"
        style={{
          top: `calc(20.5% - ${getScaledCompensation(58.5, 450)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Mistrzejowice", e)}
      />
      <Bienczyce
        className="absolute left-[48.4%] w-[11.2%] h-[auto] hover:z-10"
        style={{
          top: `calc(26.9% - ${getScaledCompensation(58.5, 355)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("Bienczyce", e)}
      />
      <WzgorzaKrzeslawickie
        className="absolute left-[53.8%] w-[26.4%] h-[auto] hover:z-10"
        style={{
          top: `calc(15.3% - ${getScaledCompensation(58.5, 530)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("WzgorzaKrzeslawickie", e)}
      />
      <NowaHuta
        className="absolute left-[51.2%] w-[40.4%] h-[auto] hover:z-10"
        style={{
          top: `calc(14.2% - ${getScaledCompensation(58.5, 550)}px)`,
          pointerEvents: "none",
        }}
        onClick={(e) => handleDistrictClick("NowaHuta", e)}
      />
    </>
  );
};

export default DistrictsList;
