import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, Power3, Elastic } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Skill(props) {
  let skill = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".icon", {
        scale: 0,
        ease: Elastic.easeOut,
        scrollTrigger: { trigger: ".icon", start: "center 60%" },
      });

      gsap.from(".item", {
        width: "0%",
        duration: 1.5,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".item",
          start: "center 60%",
        },
      });
    }, skill);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex items-center lg:px-32 px-1 mb-3" ref={skill}>
      <div className="w-[30%] lg:w-[10%]">
        <img src={props.img} alt="" className="max-w-[100%] icon" />
      </div>

      <div className="flex flex-col gap-1 font-semibold text-3xl w-full">
        <div>{props.name}</div>

        <div className="border-2 border-[white] h-4 w-full flex items-center  rounded ">
          <div
            className="h-2 rounded item"
            style={{ backgroundColor: props.color, width: props.width }}
          ></div>
        </div>
      </div>
    </div>
  );
}
