import React from "react";
import { ProductCard } from "./ProductCard";


export const ProductGrid = ({ title, products }) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-black text-5xl font-bold text-center mt-[72px] max-md:text-[40px] max-md:mt-10">
        {title}
      </h2>
      <div className="w-full max-w-[1240px] mt-[55px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {products.map((product) => (
            <div key={product.id} className="w-3/12 max-md:w-full max-md:ml-0">
              <ProductCard
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="self-stretch border min-h-[52px] w-[218px] max-w-full gap-3 overflow-hidden text-base text-black font-medium mt-9 px-[54px] py-[15px] rounded-[62px] border-[rgba(0,0,0,0.1)] border-solid max-md:px-5">
        View All
      </button>
    </section>
  );
};
