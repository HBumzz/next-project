import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Logo from "../public/assets/Logo_first.svg";

const Cunsulting = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="Consulting"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-4xl font-medium text-black-600 text-left">
                고민 말고 신청하세요.
              </h3>
              <div className="pt-3 text-l lg:text-sm text-gray-400 font-medium text-left">
                문의 하시면 최대한 빠르게 연락드리겠습니다.
              </div>
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full mt-10">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation}>
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center px-2 sm:px-12">
                  <div className="grid-row-2 items-center ">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto">
                      <Image
                        src="/assets/kakao_img.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Free Plan"
                      />
                    </div>
                    <div className="my-2 text-[12px] md:text-md font-medium text-center">
                      카카오톡 문의
                    </div>
                  </div>
                </div>
                <div className="flex justify-center px-2 sm:px-12">
                  <div className="grid-row-2 items-center ">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto">
                      <Image
                        src="/assets/call_img.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Free Plan"
                      />
                    </div>
                    <div className="my-2 text-[12px] md:text-md font-medium text-center">
                      전화 문의
                    </div>
                  </div>
                </div>
                <div className="flex justify-center px-2 sm:px-12">
                  <div className="grid-row-2 items-center ">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto">
                      <Image
                        src="/assets/message_img.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Free Plan"
                      />
                    </div>
                    <div className="my-2 text-[12px] md:text-md font-medium text-center">
                      문자메세지 문의
                    </div>
                  </div>
                </div>
                <div className="flex justify-center px-2 sm:px-12">
                  <div className="grid-row-2 items-center ">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto">
                      <Image
                        src="/assets/telegram_img.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Free Plan"
                      />
                    </div>
                    <div className="my-2 text-[12px] md:text-md font-medium text-center">
                      텔레그램 문의
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
          <Logo className="h-24" />
        </div>
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>

      </div>
    </div>
  );
};

export default Cunsulting;
