import React from 'react'

const About = () => {
    const values = [
        {
          id: 1,
          title: "Integrity",
          description:
            "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
        },
        {
          id: 2,
          title: "Innovation",
          description:
            "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
        },
        {
          id: 3,
          title: "Community",
          description:
            "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
        },
        {
          id: 4,
          title: "Customer Focus",
          description:
            "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
        },
      ];
  return (
    <div className="bg-gradient-to-br from-[#f3f4f6] to-[#eaeaea] min-h-screen flex items-center justify-center">
      <section className="w-full px-6 pt-20 lg:pl-[320px] lg:px-20 flex flex-col gap-12 max-w-6xl">
        <div className="text-center">
          <h1 className="text-[#d6482b] text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            Welcome to BidOut, the ultimate destination for online auctions
            and bidding excitement. Founded in 2024, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure environment.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-3 text-[#111]">
            Our Mission
          </h3>
          <p className="text-lg text-stone-700 leading-relaxed">
            At BidOut, our mission is to revolutionize the way people buy and
            sell items online. We aim to create an engaging marketplace that
            empowers individuals and businesses to discover unique products,
            make informed decisions, and enjoy the thrill of competitive
            bidding.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5 text-[#111] text-center">
            Our Values
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((element) => (
              <li
                key={element.id}
                className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#d6482b] hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-[#111] mb-2">
                  {element.title}
                </h4>
                <p className="text-stone-700">{element.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-3 text-[#111]">
            Our Story
          </h3>
          <p className="text-lg text-stone-700 leading-relaxed">
            Founded by CodeWithZeeshu, BidOut was born out of a passion for
            connecting people with unique and valuable items. With years of
            experience in the auction industry, our team is committed to
            creating a platform that offers an unparalleled auction experience
            for users worldwide.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-3 text-[#111]">
            Join Us
          </h3>
          <p className="text-lg text-stone-700 leading-relaxed">
            Whether you're looking to buy, sell, or simply explore, BidOut
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
        </div>

        <div className="text-center">
          <p className="text-[#d6482b] text-xl font-bold">
            Thank you for choosing BidOut. We look forward to being a part of
            your auction journey!
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
