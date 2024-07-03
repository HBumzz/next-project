import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import tamImage from "../public/assets/tam_image.png";
import Logo from "../public/assets/Logo_first.svg";
const features = [
  "이혼소송에 따른 증거자료가 필요한 경우",
  "배우자의 불륜이나 바람이 의심되는 경우",
  "신변 위협 및 스토킹",
  "이외에도 기타 누구에게도 말 못할 고민과 고충해결",
];

const Introduce = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="Introduce"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center mr-auto w-full "
            variants={scrollAnimation}
          >
            <Logo className="w-60" />
            <div className="pl-6 pt-2 md: text-md lg:text-lg xl:text-xl sm:text-md my-2 text-black-500 font-medium">
              <div>쉽지않은 결정인 걸 알기에 당신의 말못할 고민!</div>
              <div className="mb-6">
                지금이라도 프라임과 함께하시면{" "}
                <span className="text-orange-500 ">든든한 </span>
                버팀목이 되어드리겠습니다.
              </div>
              <div>오랜경험과 각분야의 우수요원을</div>
              <div className="mb-6">
                바탕으로 여러분의 고민을{" "}
                <span className="text-orange-500 ">100%</span> 해결해드립니다.
              </div>
              <div className="mb-6">
                의뢰인분들의 손과 발이되어{" "}
                <span className="text-orange-500 ">최상의 솔루션</span>을
                제공해드립니다.
              </div>
              <div className="mb-6">
                신속하고 정확하게 해결해 드리기 위해{" "}
                <span className="text-orange-500 ">온 힘</span>을 다하겠습니다!
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4 " variants={scrollAnimation}>
            <Image
              src={tamImage}
              alt="img"
              layout="responsive"
              quality={100}
              height={779}
              width={565}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Introduce;
