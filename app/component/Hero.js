import React from "react";
import portfolio from "../assets/images/portfolio.jpg";
import Image from "next/image";
import Flower from "../assets/images/flower.png";

const Hero = () => {
  return (
    <div className="px-10 pt-10 flex gap-8">
      <div className="w-2/3 flex gap-6  ">
        <div className="w-2/3 flex flex-col gap-6 bg-rose-100 rounded-xl p-10">
          <div className="flex justify-end ">
            <Image src={Flower} alt="Portfolio" height={100} width={100} />
          </div>

          <p className="w-4/6 text-5xl font-bold w-full">
            Artist Redefining <span className="italic">Architecture</span> with
            Al-Driven Design
          </p>
        </div>
        <div className="w-2/6 ">
          <Image
            className="rounded-xl"
            src={portfolio}
            alt="Portfolio"
            height={400}
            width={300}
          />
        </div>
      </div>
      <div className="w-1/3 flex bg-rose-100 rounded-xl">India</div>
    </div>
  );
};
export default Hero;
