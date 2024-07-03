import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../public/assets/Logo_first.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 lg:py-0 px-0">
          <Logo className="h-16" />
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <LinkScroll
              activeClass="active"
              to="Introduce"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("Introduce");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "Introduce"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              프라임 흥신소 소개
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              업무 안내
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              업무 절차
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="Consulting"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              상담 문의
            </LinkScroll>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3 pb-2">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="Introduce"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("Introduce");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "Introduce"
                  ? " border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="mt-1">흥신소 소개</div>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? " border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <div className="mt-1">업무 안내</div>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? " border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1.99988 5.24976C1.99988 4.14519 2.89531 3.24976 3.99988 3.24976H19.9999C21.1044 3.24976 21.9999 4.14519 21.9999 5.24976V16.2498C21.9999 17.3543 21.1044 18.2498 19.9999 18.2498H15.4141L12.707 20.9569C12.3165 21.3474 11.6833 21.3474 11.2928 20.9569L8.58566 18.2498H3.99988C2.89531 18.2498 1.99988 17.3543 1.99988 16.2498V5.24976ZM19.9999 5.24976H3.99988V16.2498H8.99988C9.26509 16.2498 9.51945 16.3551 9.70698 16.5426L11.9999 18.8355L14.2928 16.5426C14.4803 16.3551 14.7347 16.2498 14.9999 16.2498H19.9999V5.24976ZM5.99988 8.74976C5.99988 8.19747 6.44759 7.74976 6.99988 7.74976H16.9999C17.5522 7.74976 17.9999 8.19747 17.9999 8.74976C17.9999 9.30204 17.5522 9.74976 16.9999 9.74976H6.99988C6.44759 9.74976 5.99988 9.30204 5.99988 8.74976ZM5.99988 12.7498C5.99988 12.1975 6.44759 11.7498 6.99988 11.7498H12.9999C13.5522 11.7498 13.9999 12.1975 13.9999 12.7498C13.9999 13.302 13.5522 13.7498 12.9999 13.7498H6.99988C6.44759 13.7498 5.99988 13.302 5.99988 12.7498Z"
                  fill="#4F5665"
                />
              </svg>
              <div className="mt-1">업무 절차</div>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="Consulting"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? " border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <div className="mt-1">상담 문의</div>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
