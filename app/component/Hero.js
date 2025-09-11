import React from "react";
import profile from "../assets/images/profile.jpg";
import picture from "../assets/images/picture.png";
import Image from "next/image";
import Flower from "../assets/images/flower.png";
import Newdelhi from "../assets/images/newdelhi.jpg";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 md:px-10 py-10 flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className=" md:w-2/3 flex flex-col gap-6 bg-rose-100 rounded-xl p-10">
            <div className="flex justify-end ">
              <Image src={Flower} alt="flower" height={100} width={100} />
            </div>

            <p className="md:w-4/6 text-5xl font-bold w-full pt-50">
              Artist Redefining <span className="italic">Architecture</span>{" "}
              with Al-Driven Design
            </p>
          </div>
          <div className="md:w-2/6  flex justify-center ">
            <Image
              className="rounded-xl"
              src={profile}
              alt="Portfolio"
              height={400}
              width={500}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6  ">
          <div className="md:w-1/2 bg-rose-100 rounded-xl pt-10">
            <div className=" px-12 pb-15">
              <Image src={picture} alt="Portfolio" height={50} width={50} />
            </div>
            <p className="flex px-12 text-2xl font-thin pb-10">
              Julia Huang is an innovative Al artist, renowned for blending
              cutting-edge technology with creative expression. Based in LA, she
              crafts unique digital art experiences accessible globally.
            </p>
          </div>
          <div className="md:w-1/2 bg-rose-300 rounded-xl pb-15 pt-20">
            <div className=" flex justify-end px-8">
              <ArrowUpRight />
            </div>
            <p className=" px-10 ">Have Some Qustion?</p>
            <p className=" text-6xl pt-50  px-6">Contact me</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/3  flex flex-col rounded-xl">
        <div className="  ">
          <div className="bg-rose-100 p-8 rounded-xl">
            <div className="flex justify-between items-center pb-4">
              <p className="text-2xl">Delhi</p>
              <ArrowUpRight />
            </div>
            <div className="pb-10">
              <Image
                className="rounded-xl "
                src={Newdelhi}
                alt="Portfolio"
                height={700}
                width={700}
              />
            </div>
            <div>
              <p className="text-3xl border-t-3 border-rose-300 pt-10 pb-10">
                {" "}
                Elara
              </p>
              <p className="text-3xl border-t-3 border-rose-300 pt-10 pb-10">
                {" "}
                Verve
              </p>
              <p className="text-3xl border-t-3 border-rose-300 pt-10 pb-10">
                {" "}
                Zephyr
              </p>
            </div>
          </div>
          <div className="flex gap-15 justify-center   bg-rose-100 rounded-xl mt-15 py-19">
            <p className="font-bold  font-thin text-sm">INSTAGRAM</p>
            <p className="font-bold  font-thin text-sm">TWITTER</p>
            <p className="font-bold  font-thin text-sm"> LINKEDIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
