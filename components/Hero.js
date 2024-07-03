import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
// import bae_svg from "../public/assets/첫페이지_배경.svg";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    // <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
    <div className="mt-24 xl: mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid  h-screen"
          variants={scrollAnimation}
          style={{
            backgroundImage: "url('/assets/첫페이지_배경.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black-600 leading-normal">
              대한민국 NO.1 흥신소
            </h1>
            <h1 className="pt-6 text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
              완벽한 사실조사, 깔끔한 해결
            </h1>
            <h2 className="pt-6 text-sm lg:text-md xl:text-xl text-black-500 mb-6 leading-normal">
              신의, 성실 비밀보장의 원칙으로 문제를 해결해 드립니다.
            </h2>
            {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        {/* <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10"></ScrollAnimationWrapper> */}
        {/* <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div> */}
      </div>
    </div>
  );
};

export default Hero;
