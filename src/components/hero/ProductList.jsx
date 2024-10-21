import React from "react";
import { Container, Heading } from "../ui/Design";
import ProductCard from "@/custom-component/ProductCard";

const ProductList = () => {
  return (
    <>
      <section className="product-list px-10 lg:pl-[320px]">
        <div>
          <Heading
            title="Featured Auction"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae ipsum perspiciatis. Modi alias voluptates, consequatur ipsam cumque consequuntur impedit"
          ></Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md-grid:grid-cols-3 lg:grid-cols-2 lg-grid:grid-cols-3 xl-grid:grid-cols-4 gap-4 my-8">
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
