import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ProductGrid } from "@/components/home/ProductGrid";
import { BrowseByStyle } from "@/components/home/BrowseByStyle";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  // New arrivals products data
  const newArrivals = [
    {
      id: "1",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/db1b59a929371eaf556c0ff306113b7bf24e3b98?placeholderIfAbsent=true",
      title: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      price: 120,
    },
    {
      id: "2",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cc1118028aee76054bce34ff7e13cebd2b94a34?placeholderIfAbsent=true",
      title: "SKINNY FIT JEANS",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: 20,
    },
    {
      id: "3",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba6ac0b0d93c385eeb584bf9ff488aacd775f8a4?placeholderIfAbsent=true",
      title: "CHECKERED SHIRT",
      rating: 4.5,
      price: 180,
    },
    {
      id: "4",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80fc15706346c28ec6ab9256f953a1e30dcccf75?placeholderIfAbsent=true",
      title: "SLEEVE STRIPED T-SHIRT",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];

  // Top selling products data
  const topSelling = [
    {
      id: "5",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eba304a2cfba6bb7e9d8b7a914fa46d37d1c173?placeholderIfAbsent=true",
      title: "VERTICAL STRIPED SHIRT",
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: 20,
    },
    {
      id: "6",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/45e5f967e88ecfbbdb39ed9411ba64da65fbe315?placeholderIfAbsent=true",
      title: "COURAGE GRAPHIC T-SHIRT",
      rating: 4.0,
      price: 145,
    },
    {
      id: "7",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/953efd2e215b205b526aa7e89d2948039522a99f?placeholderIfAbsent=true",
      title: "LOOSE FIT BERMUDA SHORTS",
      rating: 3.0,
      price: 80,
    },
    {
      id: "8",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6151fe467a2262b5ea79c5a00c2b20a49d5ff26b?placeholderIfAbsent=true",
      title: "FADED SKINNY JEANS",
      rating: 4.5,
      price: 210,
    },
  ];

  return (
    <div className="flex flex-col px-20 max-md:pl-5">
      <div className="bg-white flex w-full max-w-[1440px] flex-col overflow-hidden items-center max-md:max-w-full">
        <Header />
        <HeroSection />
        <BrandShowcase />
        <ProductGrid title="NEW ARRIVALS" products={newArrivals} />
        <div className="border w-[1240px] shrink-0 max-w-full h-px mt-[63px] border-[rgba(0,0,0,0.1)] border-solid max-md:mt-10" />
        <ProductGrid title="TOP SELLING" products={topSelling} />
        <BrowseByStyle />
        <Testimonials />
  
        <Footer />
      </div>
    </div>
  );
};

export default Index;
