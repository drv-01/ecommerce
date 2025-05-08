import React from "react";

export const HeroSection = () => {
  return (
    <section className="self-stretch mt-6 px-20 py-[101px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch mt-[17px] max-md:max-w-full max-md:mt-10">
            <h1 className="text-black text-[64px] font-bold leading-[64px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:mr-2.5">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black text-base font-normal leading-[22px] mr-[51px] mt-8 max-md:max-w-full max-md:mr-2.5">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black min-h-[52px] gap-3 overflow-hidden text-base text-white font-medium mt-8 px-[54px] py-[15px] rounded-[62px] max-md:px-5 w-fit">
              Shop Now
            </button>
            <div className="flex justify-around gap-8  mt-12 max-md:mt-10 w-[1000px]">
              <div className="self-stretch my-auto">
                <div className="text-black text-[40px] font-bold">200+</div>
                <div className="text-black text-base font-normal leading-none">
                  International Brands
                </div>
              </div>
              <div className="border self-stretch w-0 shrink-0 h-[74px] border-[rgba(0,0,0,0.1)] border-solid" />
              <div className="self-stretch my-auto">
                <div className="text-black text-[40px] font-bold">2,000+</div>
                <div className="text-black text-base font-normal leading-none">
                  High-Quality Products
                </div>
              </div>
              <div className="border self-stretch w-0 shrink-0 h-[74px] border-[rgba(0,0,0,0.1)] border-solid" />
              <div className="self-stretch my-auto">
                <div className="text-black text-[40px] font-bold">30,000+</div>
                <div className="text-black text-base font-normal leading-none">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:max-w-full max-md:mt-10 ml-32">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1cfb0973707e54ca56a9ee79412abe496c1559?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[104px] max-w-full"
              alt="Decoration"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54142ba065eff10ea29a7fd76e0311239a1c5362?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-14 mt-[107px] max-md:mt-10"
              alt="Decoration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
