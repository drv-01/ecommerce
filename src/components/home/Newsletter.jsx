import React, { useState } from "react";

export const Newsletter= () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
    // Show success message or toast notification
    alert("Thank you for subscribing!");
  };

  return (
    <section className="bg-black z-10 flex w-full max-w-[1240px] items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap mt-20 px-16 py-9 rounded-[20px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-white text-[40px] font-bold leading-[45px] self-stretch w-[551px] my-auto max-md:max-w-full">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <form onSubmit={handleSubmit} className="self-stretch min-w-60 text-base w-[349px] my-auto">
        <div className="bg-white flex max-w-full w-[349px] gap-3 overflow-hidden text-black font-normal px-4 py-3 rounded-[62px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfac35255f50746a7b0e86a21373be5633b8bdbd?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Email icon"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-transparent outline-none w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="self-stretch bg-white max-w-full w-[349px] gap-3 overflow-hidden text-black font-medium mt-3.5 px-4 py-3 rounded-[62px] hover:bg-gray-100 transition-colors"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </section>
  );
};
