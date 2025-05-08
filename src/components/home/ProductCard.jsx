import React from "react";
import { StarRating } from "@/components/ui/StarRating";

export const ProductCard = ({
  image,
  title,
  rating,
  price,
  originalPrice,
  discount,
}) => {
  // Function to format title with first letter of each word capitalized
  const formatTitle = (title) => {
    return title.split(" ").map((word, index) => {
      if (index === 0) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      }
      return (
        <span key={index} style={{ textTransform: "lowercase" }}>
          {index > 0 ? " " : ""}
          {word}
        </span>
      );
    });
  };

  return (
    <div className="flex w-full flex-col">
      <div className="bg-[rgba(240,238,237,1)] self-stretch flex flex-col overflow-hidden items-center aspect-[1] rounded-[20px]">
        <img src={image} className="aspect-[0.99] object-contain w-full" alt={title} />
      </div>
      <div className="text-black text-xl font-bold mt-4">
        {formatTitle(title)}
      </div>
      <StarRating rating={rating} />
      <div className="flex items-center gap-2.5 text-2xl font-bold whitespace-nowrap mt-2">
        <div className="text-black self-stretch my-auto">${price}</div>
        {originalPrice && (
          <div className="text-black line-through self-stretch my-auto">${originalPrice}</div>
        )}
        {discount && (
          <div className="self-stretch bg-[rgba(255,51,51,0.1)] gap-3 overflow-hidden text-xs text-[rgba(255,51,51,1)] font-medium w-[58px] my-auto px-[13px] py-1.5 rounded-[62px]">
            -{discount}%
          </div>
        )}
      </div>
    </div>
  );
};
