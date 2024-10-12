const heroawards = [
  {
    subtitle: "Innovative Company",
    iconSrc: "/heroawards.png",
  },
  {
    subtitle: "Best Of The Year",
    iconSrc: "/heroawards1.png",
  },
  {
    subtitle: "Top One Company  ",
    iconSrc: "/heroawards2.png",
  },
];
export default function HeroInsurance2() {
  return (
    <>
      <div className=" flex flex-col xl:flex-row w-full ">
        <div className="w-full xl:w-1/2 px-12 py-12 2xl:px-25 2xl:py-25 bg-insurancecolor">
          <div>
            <div className="relative">
              <div
                className="absolute inset-0 flex justify-start mt-8  pt-[60px] pl-[160px] sm:pt-[0px] sm:pl-[440px] 2xl:pl-[[495px]]"
                aria-hidden="true"
              >
                <div className="w-full max-w-[147px] border-t-4 border-white" />
              </div>
              <div className="relative flex justify-start">
                <h1 className="text-[40px] mb-[75px] font-bold text-white">
                  Recognitions / Awards
                </h1>
              </div>
            </div>
            <p className="text-[28px] text-white font-semibold mb-[28px]">
              Nam Nullam lectuur
            </p>
            <p className="text-[24px] text-white/80 font-light ">
              Chasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus. Nam nulla
              quam, gravida non, commodo a, sodales sit amet, nisi.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 bg-insurancecolor1 py-12 pl-12 pr-12 2xl:pt-[100px] 2xl:pb-[49px] 2xl:pl-[89px] 2xl:pr-[104px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-24 sm:gap-y-0 justify-center ">
            {heroawards.map((hero, index) => (
              <div
                key={index}
                className=" rounded-full p-4 sm:p-8 text-center "
              >
                <div className=" w-full h-full sm:w-[195px] sm:h-[174px] mx-auto mb-2 sm:mb-4  flex items-center justify-center rounded-full">
                  <img
                    src={hero.iconSrc}
                    alt="Icon"
                    className="w-[195px] h-[174px]  "
                  />
                </div>
                <p className="text-[24px] font-semibold text-white py-3">
                  {hero.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
