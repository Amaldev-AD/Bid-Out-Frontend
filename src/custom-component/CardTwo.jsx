import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdDelete } from "react-icons/md";

import { GrFormView } from "react-icons/gr";
import { Caption, PrimaryButton, ProfileCard, Title } from "@/components/ui/Design";
import { RiAuctionFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const CardTwo = () => {
  return (
    <>
       <div>
       <Card className="w-full bg-white shadow-lg hover:shadow-2xl rounded-lg transition-shadow duration-300">
      <CardHeader>
        <div className="w-full relative overflow-hidden rounded-t-lg">
         <img
            src="https://intelcorp.scene7.com/is/image/intelcorp/opened-neon-lighted-computer-case-rwd:1920-1080?wid=864&hei=486"
            className="w-full h-52 object-cover hover:scale-105 cursor-pointer transition-transform duration-300"
            alt="Product"
          />
          <div className="absolute top-2 left-2">
            <Caption className="text-[#308d68] bg-white/80 backdrop-blur-md px-3 py-1 text-xs rounded-full shadow">
              On Stock
            </Caption>
          </div>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-800 mt-4 text-center">
          INTEL CPU
        </CardTitle>
        <hr className="mt-1 border-gray-300" />
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <RiAuctionFill size={25} className="text-gray-500" />
            <div className="flex gap-2 items-center">
              <Caption className="text-gray-500 whitespace-nowrap">
                Starting Bid:
              </Caption>
              <p className="text-[#19ca83] font-medium">20000$</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 bg-gray-50 px-3 rounded-md">
          <Caption className="text-red-500 text-sm font-medium animate-pulse">
            Times up!!!!
          </Caption>
        </div>

        <div className="flex items-center justify-between mt-1">
          <Link to={'/auctions/item'} className=' rounded-md bg-[#53AF7A] hover:bg-[#305e58] text-white'><GrFormView size={35} />
          </Link>
          <button className='py-2 px-3 rounded-md  bg-[#53AF7A] text-white font-semibold hover:bg-[#305e58]'>Republish Auction</button>
          <Link to={'/'} className=' rounded-md bg-[#53AF7A] hover:bg-[#305e58] text-white p-1'><MdDelete size={27} />

          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  )
}

export default CardTwo
