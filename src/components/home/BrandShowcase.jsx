import React from "react";

export const BrandShowcase = () => {
  return (
    <section className="bg-black self-stretch flex w-full flex-col items-center justify-center px-[70px] py-[42px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[653px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f910e79046f07e85852b5ebfbb4b9bffc7fdab5d?placeholderIfAbsent=true"
          className="aspect-[2.39] object-contain w-[91px] shrink-0"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b02efcd7aff693ad49fef25fc45323c7c6ad0e1?placeholderIfAbsent=true"
          className="aspect-[4.33] object-contain w-[156px] shrink-0 max-w-full"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bba86750a1d9bb221b2462488595fa07f798bcb?placeholderIfAbsent=true"
          className="aspect-[6.06] object-contain w-[194px] shrink-0 max-w-full my-auto"
          alt="Brand logo"
        />
      </div>
    </section>
  );
};
