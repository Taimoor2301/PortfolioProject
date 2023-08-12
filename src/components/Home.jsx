import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Power3, gsap } from "gsap";

let svg = (
  <svg
    className="rotate-[-15deg]"
    height="8rem"
    width="8rem"
    fill="#2f2f2f"
    version="1.1"
    id="Layer_1"
    viewBox="0 0 511.509 511.509"
  >
    <g>
      <g>
        <path
          d="M498.675,493.845L265.16,5.568c-3.541-7.424-15.701-7.424-19.243,0L11.251,496.235c-1.579,3.307-1.344,7.189,0.597,10.283
			s5.355,4.992,9.024,4.992h469.76c5.888,0,10.667-4.779,10.667-10.667C501.299,498.176,500.317,495.723,498.675,493.845z"
        />
      </g>
    </g>
  </svg>
);

export default function Home({ animationReady }) {
  let myRef = useRef();
  let tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".heading1", {
          height: 0,
          overflow: "hidden",
          duration: 0.8,
          stagger: 0.5,
        })
        .from(".text", {
          y: -50,
          opacity: 0,
          overflow: "hidden",
          duration: 0.8,
          stagger: 0.2,
        })
        .from(".icon", {
          y: 300,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: Power3.easeOut,
        })
        .from(".triangle", { opacity: 0, x: 400 })
        .from(".circle", { x: -100, opacity: 0 });
    }, myRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="flex md:flex-row flex-col gap-2 md:gap-10text-[white] py-4 px-2"
      ref={myRef}
      id="home"
    >
      {/* name section  */}
      <div className="text-center md:text-right mt-[4rem] font-[600] flex-1 ">
        <div className="heading1 text-5xl lg:text-8xl text-[white]">
          TAIMOOR ALI
        </div>

        <div className="heading1 bg-gradient-to-r from-[indigo] to-greenShade bg-clip-text text-4xl text-transparent">
          Web Developer
        </div>

        <div className="flex gap-5 text-[white] text-4xl lg:text-6xl justify-center mt-8 cursor-pointer">
          <i className="fa-brands fa-instagram icon cursor-pointer hover:text-orangeMain"></i>
          <i className="fa-brands fa-facebook icon cursor-pointer hover:text-orangeMain "></i>
          <i className="fa-brands fa-linkedin icon cursor-pointer hover:text-orangeMain"></i>
          <i className="fa-brands fa-github icon cursor-pointer hover:text-orangeMain"></i>
        </div>
      </div>

      {/* info section  */}
      <div className="lg:w-[80%] flex-1 flex flex-col items-center md:items-start text-center md:text-start  gap-5 px-5">
        {/* shapes */}
        <div className="flex flex-col gap-10 px-8 items-center">
          <div className="triangle"> {svg}</div>
          <div className="w-[3rem] h-[3rem] bg-greenShade rounded-[50%] circle"></div>
        </div>

        <div className="text-orangeMain flex items-center justify-between  gap-2 underline underline-offset-4 w-full text">
          WEB Developer
          <div className=" bg-orangeMain h-1 w-[20%] rounded"></div>
        </div>

        <div className="md:text-4xl text-2xl lg:w-[70%] font-[600] text-[white] text">
          Based in Pakistan, I'm WEB Developer and WEB Designer
        </div>

        <p className="lg:w-[60%] text-[#aeaeae] text-start text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nobis
          atque deserunt sapiente totam itaque! Tempora, ut at. Nisi culpa
          labore et cum modi sed quibusdam ad, consequuntur iusto deserunt.
        </p>
        <div className="text-orangeMain flex flex-col gap-2  w-full p-0 items-start text">
          <span>Phone : +923185505264</span>
          <span>Email : Taimoorali4214@gmail.com </span>
        </div>
      </div>
    </main>
  );
}
