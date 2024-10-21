import React from "react";
import {
  FaDollarSign,
  FaEnvelope,
  FaFileInvoice,
  FaGavel,
  FaRedo,
  FaUser,
} from "react-icons/fa";

const HowitWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];
  return (
    <>
      <section className="w-full px-5 pt-16 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-[#e63946] text-4xl font-extrabold mb-4 min-[480px]:text-5xl md:text-6xl xl:text-7xl text-center tracking-tight">
          Discover How BidOut Operates
        </h1>

        <div className="grid grid-cols-1 gap-8 my-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((element, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-4 group hover:bg-[#1d3557] transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#1d3557] text-white p-4 text-2xl rounded-full w-fit group-hover:bg-[#e63946] transition-all duration-300">
                  {element.icon}
                </div>
                <h3 className="text-[#1d3557] font-semibold md:text-2xl group-hover:text-white transition-colors duration-300">
                  {element.title}
                </h3>
              </div>
                <p className="text-lg text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                  {element.description}
                </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowitWorks;
