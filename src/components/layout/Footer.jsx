import React from "react";

export const Footer= () => {
  return (
    <footer className="bg-[rgba(240,240,240,1)] self-stretch w-full pt-[140px] pb-[82px] px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="flex w-full max-w-[1240px] gap-[40px_100px] justify-between flex-wrap max-md:max-w-full mx-auto">
        <div className="min-w-60 w-[248px]">
          <div className="max-w-full w-[248px]">
            <div className="text-black text-[33px] font-bold">SHOP.CO</div>
            <div className="text-black text-sm font-normal leading-[22px] mt-[25px]">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </div>
          </div>
        </div>
        
        <div className="text-base">
          <div className="text-black font-medium leading-none tracking-[3px] uppercase">
            Company
          </div>
          <div className="text-black font-normal leading-[19px] mt-[26px]">
            <a href="#" className="block mb-4">About</a>
            <a href="#" className="block mb-4">Features</a>
            <a href="#" className="block mb-4">Works</a>
            <a href="#" className="block">Career</a>
          </div>
        </div>
        
        <div className="text-base">
          <div className="text-black font-medium leading-none tracking-[3px] uppercase">
            Help
          </div>
          <div className="text-black font-normal leading-[19px] mt-[26px]">
            <a href="#" className="block mb-4">Customer Support</a>
            <a href="#" className="block mb-4">Delivery Details</a>
            <a href="#" className="block mb-4">Terms & Conditions</a>
            <a href="#" className="block">Privacy Policy</a>
          </div>
        </div>
        
        <div className="text-base w-[149px]">
          <div className="text-black font-medium leading-none tracking-[3px] uppercase">
            FAQ
          </div>
          <div className="text-black font-normal leading-[19px] mt-[26px]">
            <a href="#" className="block mb-4">Account</a>
            <a href="#" className="block mb-4">Manage Deliveries</a>
            <a href="#" className="block mb-4">Orders</a>
            <a href="#" className="block">Payments</a>
          </div>
        </div>
        
        <div className="text-base">
          <div className="text-black font-medium leading-none tracking-[3px] uppercase">
            Resources
          </div>
          <div className="text-black font-normal leading-[19px] mt-[26px]">
            <a href="#" className="block mb-4">Free eBooks</a>
            <a href="#" className="block mb-4">Development Tutorial</a>
            <a href="#" className="block mb-4">How to - Blog</a>
            <a href="#" className="block">Youtube Playlist</a>
          </div>
        </div>
      </div>
      
      <div className="border w-[1240px] shrink-0 max-w-full h-px mt-[49px] border-[rgba(0,0,0,0.1)] border-solid max-md:mt-10 mx-auto" />
      
      <div className="flex w-full max-w-[1240px] items-stretch gap-[40px_100px] flex-wrap mt-5 max-md:max-w-full mx-auto">
        <div className="text-black text-sm font-normal text-right my-auto">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className="flex gap-3 flex-1">
          <a href="#" aria-label="Payment method">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/66e5593667d53a314d845d768f6be1bd0f00c8cd?placeholderIfAbsent=true"
              className="aspect-[1.57] object-contain w-[47px] fill-white stroke-[0.224px] stroke-[#D6DCE5] shrink-0"
              alt="Payment method"
            />
          </a>
          <a href="#" aria-label="Payment method">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/492a84c2713ee446811d41171790629a490827ba?placeholderIfAbsent=true"
              className="aspect-[1.53] object-contain w-[46px] fill-white stroke-[0.224px] stroke-[#D6DCE5] shrink-0"
              alt="Payment method"
            />
          </a>
          <a href="#" aria-label="Payment method">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/760880721a7706c9006b26fa3712ce6faec46da4?placeholderIfAbsent=true"
              className="aspect-[1.57] object-contain w-[47px] fill-white stroke-[0.224px] stroke-[#D6DCE5] shrink-0"
              alt="Payment method"
            />
          </a>
          <a href="#" aria-label="Payment method">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ebe4962bc436e376d427b30b9d5bbe9f6f75c8?placeholderIfAbsent=true"
              className="aspect-[1.53] object-contain w-[46px] fill-white stroke-[0.224px] stroke-[#D6DCE5] shrink-0"
              alt="Payment method"
            />
          </a>
          <a href="#" aria-label="Payment method">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce508b0a0b7e8bdf9c4428531af97a7654a9fa05?placeholderIfAbsent=true"
              className="aspect-[1.57] object-contain w-[47px] fill-white stroke-[0.224px] stroke-[#D6DCE5] shrink-0"
              alt="Payment method"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
