import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-4xl font-medium text-black-600 text-left">
                프라임 흥신소는{" "}
                <span className="text-orange-500">체계적인</span> 시스템을
                추구합니다
              </h3>
              <div className="pt-2 text-lg lg:text-2xl my-2 text-orange-500 font-medium text-left">
                저희 프라임 흥신소는
              </div>
              <div className="pt-1 text-l lg:text-sm text-gray-400 font-medium text-left">
                여러분의 고민을 세심히 듣고, 신속 · 정확한 해결책으로 고민
                해결해드립니다.
              </div>
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-2 py-8 lg:py-12 sm:px-0 lg:px-2">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card1.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        전화 상담
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        가정고민 및 기업문제
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        상황파악 및 접수
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card2.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        업무 의뢰{" "}
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        계약 후 자료 및
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        정보 취합
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card3.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        업무 분석
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        정보 분석 및
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        방향 기획과 제시
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card4.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        담당팀 선정
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        해당 의뢰
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        전문요원 선별
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-2 sm:px-0 lg:px-2">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card5.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        업무 진행
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        빠른진행과 정확한 업무로
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        실시간 고객님께 보고
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card6.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        자료 수집{" "}
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        의뢰에 대한 관련
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        모든 정보 및 자료 수집
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card7.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        의뢰 보고
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        업무 진행에 따른
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        최종결과를 고객님께 보고
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-row-2 flex-col justify-center items-center rounded-2xl bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="lg:p-0">
                      <Image
                        src="/assets/card8.png"
                        width={264}
                        height={213}
                        alt="Free Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        관련정보 폐기
                      </p>
                      <p className="text-md text-gray-400 font-medium capitalize ">
                        의뢰에 대한 관련
                      </p>
                      <p className="text-md mb-10 text-gray-400 font-medium capitalize">
                        모든 정보 폐기 처분
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
