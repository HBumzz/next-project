import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-10 pb-24 flex flex-col items-center">
      <div className="w-full pt-20">
        <hr className="mx-60 border-t-1 border-gray-500 mb-8"/>
      </div>
      <div className="text-gray-500 text-[16px] mb-1">No.1 프라임 흥신소</div>
      <div className="text-gray-500 text-[16px] mb-1">대표자 - 정한영</div>
      <div className="text-gray-500 text-[16px] mb-1">
        사업자등록번호 - 385-41-01301
      </div>
      <div className="text-gray-500 text-[16px]">
        ©{new Date().getFullYear()} 프라임탐정사무소 Co. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
