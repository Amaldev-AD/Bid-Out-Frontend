import { Title } from '@/components/ui/Design'
import React from 'react'


const Leaderboard = () => {
  return (
    <>
      <section className="my-8 px-10 lg:pl-[320px]">
        <div className="flex flex-col items-center  min-[525px]:flex-row min-[525px]:gap-2 mb-6 mt-14">
          <div>
            <Title level={4} className="text-transparent text-[35px] lg:text-[44px] bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400">
              Top 10
            </Title>
          </div>
          <div>
            <Title level={4} className="text-transparent text-[35px] lg:text-[44px] bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Bidders Collection
            </Title>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 p-4">
          <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
                <th className="py-3 px-4 text-left uppercase font-semibold">Profile Pic</th>
                <th className="py-3 px-4 text-left uppercase font-semibold">Username</th>
                <th className="py-3 px-4 text-left uppercase font-semibold">Bid Expenditure</th>
                <th className="py-3 px-4 text-left uppercase font-semibold">Auctions Won</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                { rank: 1, username: 'Orso', expenditure: 10000, won: 2, img: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
                { rank: 2, username: 'Jackson', expenditure: 9000, won: 2, img: 'https://cdn-icons-png.flaticon.com/128/236/236832.png' },
                { rank: 3, username: 'Manu', expenditure: 8000, won: 2, img: 'https://cdn-icons-png.flaticon.com/128/236/236831.png' },
                { rank: 4, username: 'Alex', expenditure: 6000, won: 2, img: 'https://cdn-icons-png.flaticon.com/128/1154/1154448.png' },
              ].map(({ rank, username, expenditure, won, img }) => (
                <tr
                  key={rank}
                  className="border-b border-gray-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <td className="flex items-center gap-4 py-3 px-4">
                    <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">{rank}</span>
                    <img src={img} alt="" className="h-12 w-12 object-cover rounded-full shadow-md" />
                  </td>
                  <td className="py-3 px-4 font-medium">{username}</td>
                  <td className="py-3 px-4 font-semibold text-purple-600">${expenditure.toLocaleString()}</td>
                  <td className="py-3 px-4">{won}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Leaderboard
