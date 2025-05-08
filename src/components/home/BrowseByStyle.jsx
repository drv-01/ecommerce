import React from "react";

export const BrowseByStyle = () => {
  return (
    <section className="bg-[rgba(240,240,240,1)] flex w-full max-w-[1239px] flex-col overflow-hidden items-stretch mt-20 px-16 py-[73px] rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-black text-5xl font-bold text-center self-center max-md:max-w-full max-md:text-[40px]">
        BROWSE BY dress STYLE
      </h2>
      <div className="mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[37%] max-md:w-full max-md:ml-0">
            <div className="bg-white grow overflow-hidden text-4xl text-black font-bold whitespace-nowrap w-full rounded-[20px] max-md:mt-5">
              <div className="flex flex-col relative aspect-[1.408] w-full pt-[25px] pb-[172px] px-9 max-md:pb-[110px] max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72a3b72a6fba03227f90f682d9db6263222d03f?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt="Casual style"
                />
                Casual
              </div>
            </div>
          </div>
          <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-white grow overflow-hidden text-4xl text-black font-bold whitespace-nowrap w-full rounded-[20px] max-md:max-w-full max-md:mt-5">
              <div className="flex flex-col relative min-h-[289px] w-full pt-[25px] pb-[172px] px-9 max-md:max-w-full max-md:pb-[110px] max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae499097e9aac167e9b4bbe1df549ac33ced0771?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt="Formal style"
                />
                Formal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[63%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5daab332d6fb3ec1ba7992585d8506c4d2eda5?placeholderIfAbsent=true"
              className="aspect-[2.36] object-contain w-full grow rounded-[20px] max-md:max-w-full max-md:mt-5"
              alt="Party style"
            />
          </div>
          <div className="w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/910fe28bb05a052ce47f29aecf41d5fdc64f5d6f?placeholderIfAbsent=true"
              className="aspect-[1.41] object-contain w-full grow rounded-[20px] max-md:mt-5"
              alt="Gym style"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
