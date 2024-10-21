import React from "react";
import { Heading, Title } from "../ui/Design";
import { RiAuctionFill } from "react-icons/ri";

const UpcomingAuction = () => {
  return (
    <>
      <section className="py-12 px-6 md:px-10 lg:pl-[320px] lg:pr-5  z-10">
        <Title level={4} className="text-black text-[35px]">
          Auction For Today
        </Title>

        <div className="flex flex-col gap-6">
          <div className="bg-[#161613] w-full p-2 gap-10 rounded-md flex flex-col justify-between lg:flex-1 lg:h-auto lg:p-6 2xl:flex-none">
            <span className="rounded-full bg-[#fdba88] text-white w-fit p-3">
              <RiAuctionFill />
            </span>
            <div>
              <Title level={4} className="text-[#fdba88] text-[29px]">
                Auction's For
              </Title>
              <div>
                <Title level={4} className="text-[#fff] text-[29px]">
                  Today
                </Title>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:flex-1 2xl:flex-none  2xl:flex-grow">
            <div className="w-full flex flex-col gap-4 bg-white p-2 border-[1px] rounded-md 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486" alt="" className="w-16 h-16 2xl:w-10 2xl:h-10" />
                <p className="font-extralight text-[12px] text-[#111] "></p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-600 font-semibold">Starting Bid:</p>
                <p className="text-[#fdba88]">Rs.1000</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-stone-600 font-bold ">Starting Time:</p>
                <p className="text-black">1.00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full   2xl:flex-grow">
            <div className="w-full flex flex-col gap-4 bg-white p-2 rounded-md border-[1px] 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486" alt="Intel Cpu" className="w-16 h-16 2xl:w-10 2xl:h-10" />
                <p className="font-extralight text-[12px] text-[#111] "></p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-600 font-semibold">Starting Bid:</p>
                <p className="text-[#fdba88]">Rs.1000</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-stone-600 font-bold ">Starting Time:</p>
                <p className="text-black">1.00 PM</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full 2xl:basis-64  2xl:flex-grow">
            <div className="w-full flex flex-col gap-4 bg-white p-2 rounded-md border-[1px] 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486" alt="Intel Cpu" className="w-16 h-16 2xl:w-10 2xl:h-10" />
                <p className="font-extralight text-[12px] text-[#111] "></p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-600 font-semibold">Starting Bid:</p>
                <p className="text-[#fdba88]">Rs.1000</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-stone-600 font-bold ">Starting Time:</p>
                <p className="text-black">1.00 PM</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default UpcomingAuction;
