const WelcomePrompt = () => {
  return (
    <div className="w-[619px] h-[244px] absolute">
      <div className="w-[619px] h-[244px] left-0 top-0 absolute bg-white/60 border border-black backdrop-blur-sm" />
      <div className="w-[246px] h-[37px] left-[190px] top-[166px] absolute opacity-60 bg-gradient-to-r from-[#0cae01] to-[#91ae00] rounded-[14px] backdrop-blur-sm" />
      <div className="w-[189px] left-[204px] top-[172px] absolute">
        <span className="text-white text-xl font-medium font-['Lato']">
          ROZPOCZNIJ{" "}
        </span>
        <span className="text-white text-xl font-medium font-['Lato'] underline">
          TUTAJ
        </span>
      </div>
      <div className="w-[619px] h-[107px] left-0 top-[46px] absolute text-center">
        <span className="text-[#636366] text-[40px] font-bold font-['Lato']">
          Oblicz Swój Ślad Węglowy
          <br />
        </span>
        <span className="text-black text-2xl font-['Lato']"> Zadbaj o </span>
        <span className="text-[#91ae00] text-2xl font-bold font-['Lato']">
          ŚRODOWISKO
          <br />
        </span>
      </div>
    </div>
  );
};

export default WelcomePrompt;
