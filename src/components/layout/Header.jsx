import React, { useState } from "react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you would typically handle the search functionality
  };

  return (
    <header className="w-full">
      
      <nav className="flex w-full max-w-[1240px] items-center gap-10 justify-center flex-wrap mt-6 max-md:max-w-full mx-auto">
        <div className="text-black text-[32px] font-bold self-stretch my-auto">
          SHOP.CO
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-6 text-base text-black font-normal my-auto">
          <div className="self-stretch flex items-center gap-1 whitespace-nowrap my-auto cursor-pointer">
            <div className="self-stretch my-auto">Shop</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b96d1d2b36fa266bd5212e1bee4c2cb9eaa220?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Dropdown"
            />
          </div>
          <div className="self-stretch my-auto cursor-pointer">On Sale</div>
          <div className="self-stretch my-auto cursor-pointer">New Arrivals</div>
          <div className="self-stretch my-auto cursor-pointer">Brands</div>
        </div>
        <form onSubmit={handleSearch} className="bg-[rgba(240,240,240,1)] self-stretch flex min-w-60 gap-3 overflow-hidden text-base text-black font-normal flex-1 shrink basis-[0%] my-auto px-4 py-3 rounded-[62px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f92267c421b9df7ad5c56f600f05a9abbbd6881?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Search"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full"
          />
        </form>
        <div className="self-stretch flex gap-3.5 my-auto">
          <button aria-label="User account">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97301dab40dc819ef659872c1b3cc1eb4fd0e9f2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Account"
            />
          </button>
          <button aria-label="Shopping cart">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5e3f50c44bce7c8563de675dc18441131747a3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Cart"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
