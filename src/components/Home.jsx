import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Bounce, gsap } from "gsap";

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

export default function Home() {
  let myRef = useRef();
  let tl = useRef();

  let [reversed, setReversed] = useState(false);

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
        .from(".triangle", { opacity: 0, x: 400 })
        .from(".circle", { x: -100, opacity: 0 });
    }, myRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <main
      className="flex md:flex-row flex-col gap-2 md:gap-10 bg-darkPrimary text-[white] py-4 px-2"
      ref={myRef}
    >
      {/* name section  */}
      <div className="md:w-[100%] min-h-[20vh] text-center mt-[4rem]  font-[600] ">
        <div className="heading1 text-5xl md:text-8xl">TAIMOOR ALI</div>
        <div className="heading1 bg-gradient-to-r from-[indigo] to-greenShade bg-clip-text text-transparent md:pl-8 text-4xl md:text-6xl">
          Frontend Web Developer
        </div>
      </div>

      {/* info section  */}
      <div className="lg:w-[80%] flex flex-col items-center md:items-start text-center md:text-start  gap-5 px-5">
        {/* shapes */}
        <div className="flex flex-col gap-10 px-8 items-center">
          <div className="triangle"> {svg}</div>
          <div
            className="w-[3rem] h-[3rem] bg-greenShade rounded-[50%] circle"
            onClick={() => setReversed(!reversed)}
          ></div>
        </div>

        <div className="text-orangeMain flex items-center justify-between  gap-2 underline underline-offset-4 w-full text">
          WEB Developer
          <div className=" bg-orangeMain h-1 w-[20%] rounded"></div>
        </div>

        <div className="md:text-4xl text-2xl lg:w-[70%] font-[500] text">
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
