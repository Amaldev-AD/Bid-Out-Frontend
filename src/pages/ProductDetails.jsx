import {
  Body,
  Caption,
  commonClassNameOfInput,
  Title,
} from "@/components/ui/Design";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const ProductDetails = () => {
  const [activetab, setActiveTab] = useState("description");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="pt-24 lg:pt-12 px-8 lg:pl-[320px]">
        <div>
          <div className="flex w-full flex-col product:flex-row justify-between gap-8">
            <div className="w-full product:w-1/2">
              <div className="h-[70vh] lg:h-[50vh] product:h-[70vh]">
                <img
                  src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486"
                  className=" w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full product:w-1/2">
              <Title level={2} className="capitalize">
                INTEL CPU
              </Title>
              <div className="flex gap-2 mb-2">
                <div className="flex text-green-400">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 Customer reviews)</Caption>
              </div>

              <Body className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                illum sed error quibusdam ad doloremque
              </Body>

              <Caption className="mb-1">Item condition: New</Caption>

              <Caption className="mb-1">Item Verified: Yes</Caption>

              <Caption className="mb-1">Time Left:</Caption>

              <div className="flex gap-3 text-center ">
                <div className="p-5 px-8 shadow-xl">
                  <Title level={4}>149</Title>
                  <Caption>Days</Caption>
                </div>
                <div className="p-5 px-8 shadow-xl">
                  <Title level={4}>12</Title>
                  <Caption>Hours</Caption>
                </div>
                <div className="p-5 px-8 shadow-xl">
                  <Title level={4}>36</Title>
                  <Caption>Minutes</Caption>
                </div>
                <div className="p-5 px-8 shadow-xl">
                  <Title level={4}>51</Title>
                  <Caption>Seconds</Caption>
                </div>
              </div>
              <br />
              <Title className="flex items-center gap-2">
                Auction Ends:
                <Caption>December 31,2024 12.00 am</Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Time Zone:
                <Caption>UTC 0</Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Price:
                <Caption>$200</Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Current Bid:
                <Caption>$500</Caption>
              </Title>
            </div>
          </div>

          <form className="p-3 px-10 shadow-xl py-8 ">
            <div className="flex gap-3 justify-between">
              <input
                type="text"
                className={`${commonClassNameOfInput} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                placeholder="Enter Bid Amount"
              />
              <button className="bg-gray-100 rounded-md px-5 py-3">
                <AiOutlinePlus />
              </button>
              <button className="bg-gray-100 rounded-md px-5 py-3">
                Submit
              </button>
            </div>
          </form>

          <div className="details mt-3">
            <div className="flex items-center gap-5">
              <button
                className={` rounded-md px-10 capitalize py-4 text-black shadow-lg ${
                  activetab === "description"
                    ? "bg-green-300 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("description")}
              >
                Description
              </button>
              <button
                className={` rounded-md px-10 capitalize py-4 text-black shadow-lg ${
                  activetab === "auctionHistory"
                    ? "bg-green-300 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("auctionHistory")}
              >
                Auction History
              </button>
              <button
                className={` rounded-md px-10 capitalize py-4 text-black shadow-lg ${
                  activetab === "moreProducts"
                    ? "bg-green-300 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("moreProducts")}
              >
                More Products
              </button>
            </div>
            <div className="tab-content mt-5">
              {activetab === "description" && (
                <div
                  className="description-tab shadow-xl p-8 rounded-md
                      "
                >
                  <Title level={4}>Description</Title>
                  <br />
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely
                    heard of Non-Fungible Tokens (Biddings), more popularly
                    referred to as ‘Crypto Collectibles.’ The world of Biddings
                    is growing rapidly. It seems there is no slowing down of
                    these assets as they continue to go up in price. This growth
                    comes with the opportunity for people to start new
                    businesses to create and capture value. The market is open
                    for players in every kind of field. Are you a collector.
                  </Caption>
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely
                    heard of Non-Fungible Tokens (Biddings), more popularly
                    referred to as ‘Crypto Collectibles.’ The world of Biddings
                    is growing rapidly. It seems there is no slowing down of
                    these assets as they continue to go up in price. This growth
                    comes with the opportunity for people to start new
                    businesses to create and capture value. The market is open
                    for players in every kind of field. Are you a collector.
                  </Caption>
                </div>
              )}
              {activetab === "auctionHistory" && (
                <div
                  className="description-tab shadow-xl p-8 rounded-md
                      "
                >
                  <Title level={5} className=" font-normal">
                    Auction History
                  </Title>
                  <hr className="my-5" />

                  <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th scope="col" className="px-6 py-5">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Bid Amount(USD)
                          </th>
                          <th scope="col" className="px-6 py-3">
                            User
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Auto
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4">
                            December 31, 2024 12:00 am
                          </td>
                          <td className="px-6 py-4">$200</td>
                          <td className="px-6 py-4">Sunil Pokhrel</td>
                          <td className="px-6 py-4"> </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activetab === "moreProducts" && (
                <div
                  className="description-tab shadow-xl p-8 rounded-md
                      "
                >
                  <Title level={4}>More Products</Title>
                  <br />
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely
                    heard of Non-Fungible Tokens (Biddings), more popularly
                    referred to as ‘Crypto Collectibles.’ The world of Biddings
                    is growing rapidly. It seems there is no slowing down of
                    these assets as they continue to go up in price. This growth
                    comes with the opportunity for people to start new
                    businesses to create and capture value. The market is open
                    for players in every kind of field. Are you a collector.
                  </Caption>
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely
                    heard of Non-Fungible Tokens (Biddings), more popularly
                    referred to as ‘Crypto Collectibles.’ The world of Biddings
                    is growing rapidly. It seems there is no slowing down of
                    these assets as they continue to go up in price. This growth
                    comes with the opportunity for people to start new
                    businesses to create and capture value. The market is open
                    for players in every kind of field. Are you a collector.
                  </Caption>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
