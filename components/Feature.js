import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Checkbox from "../public/assets/checkbox.svg";
const features = [
  "이혼소송에 따른 증거자료가 필요한 경우",
  "배우자의 불륜이나 바람이 의심되는 경우",
  "신변 위협 및 스토킹",
  "이외에도 기타 누구에게도 말 못할 고민과 고충해결",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/expert_image.png"
              alt="img"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center mr-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium text-black-600">
              주요 업무
            </h3>
            <div className="pt-2 text-xl lg: text-2xl my-2 text-orange-500 font-medium ">
              여러분은 어떤 고민이 있으신가요?
            </div>
            <div className="pt-3 text-md lg: text-l text-gray-400 font-medium ">
              수많은 사건을 처리하여 오면서 의뢰인들이 원하는 것이 무엇인지
            </div>
            <div className="mb-6 text-md lg: text-l text-gray-400 font-medium ">
              무엇인지 정확하게 파악하고 있습니다.
            </div>
            <ul className="text-black-500 font-md self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="flex items-center mt-1">
                    <Checkbox className="h-6 w-6 mr-2" />
                    <span>{feature}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
