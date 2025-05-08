import React from "react";


const TestimonialCard = ({ name, text, rating, verified = false }) => {
  return (
    <div className="border flex min-h-60 overflow-hidden flex-wrap px-8 py-7 rounded-[20px] border-[rgba(0,0,0,0.1)] border-solid max-md:px-5">
      <div className="flex min-w-60 w-full justify-between flex-1 shrink basis-[0%]">
        <div className="flex min-w-60 w-full flex-col items-stretch flex-1 shrink basis-[0%]">
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={i < rating ? "https://cdn.builder.io/api/v1/image/assets/TEMP/87ce11631bf651ae1bca88acc7a09974aae93822?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/cecef108ca4e292fca08366a1d9ef3f3f0e3e6e8?placeholderIfAbsent=true"}
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt={i < rating ? "Filled star" : "Empty star"}
              />
            ))}
          </div>
          <div className="flex w-full flex-col items-stretch mt-[15px]">
            <div className="flex items-center gap-1 text-xl text-black font-bold leading-[1.1]">
              <div className="self-stretch my-auto">{name}</div>
              {verified && (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace4c826578982eb5797cbeec9cc33d9e8c3bb96?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="Verified"
                />
              )}
            </div>
            <div className="text-black text-base font-normal leading-[22px] mt-3">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Alex K.",
      text: "\"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.\"",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "James L.",
      text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
      rating: 5,
      verified: true
    },
    {
      id: 4,
      name: "Mooen",
      text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
      rating: 5
    }
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex w-full max-w-[1240px] items-stretch gap-5 flex-wrap justify-between mt-20 max-md:max-w-full max-md:mt-10">
        <h2 className="text-black text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-stretch gap-4 mt-[34px]">
          <button aria-label="Previous testimonial">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab646479d0ee50eb9618ea605f8815546202059d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Previous"
            />
          </button>
          <button aria-label="Next testimonial">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b777b831b9e8fff4c264a3417d3753a5e5225c1b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Next"
            />
          </button>
        </div>
      </div>
      <div className="self-stretch flex w-full items-stretch gap-5 flex-wrap mt-10 max-md:max-w-full">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            text={testimonial.text}
            rating={testimonial.rating}
            verified={testimonial.verified}
          />
        ))}
      </div>
    </section>
  );
};
