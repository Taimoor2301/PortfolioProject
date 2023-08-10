import React, { useLayoutEffect, useRef } from "react";
import react from "../assets/images/react.gif";
import bootstrap from "../assets/images/bootstrap.gif";
import css from "../assets/images/css.gif";
import js from "../assets/images/js.gif";
import html from "../assets/images/html.gif";
import Skill from "./servicesComponents/skill";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skills = useRef();
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".heading", {
        y: 100,
        opacity: 0,
        scale: 0.75,
        scrollTrigger: {
          trigger: ".heading",
          scrub: true,
          start: "top 70%",
          end: "top 50%",
        },
      });
    }, skills);
    return () => ctx.revert();
  }, []);

  return (
    <main className="py-16 md:mb-10 bg-darkPrimary l" id="skills" ref={skills}>
      <section className="text-center text-[white]">
        <div className="text-orangeMain underline underline-offset-4 py-2 heading">
          Skills
        </div>
        <div className="font-bold  text-5xl md:text-6xl py-4 heading">
          Coolset Ever
        </div>
      </section>

      <section className="flex flex-col gap-5 text-[white]">
        <Skill img={react} name="React JS" color="cyan" width="80%" />
        <Skill img={html} name="HTML" color="orange" width="92%" />
        <Skill img={css} name="CSS" color="skyblue" width="88%" />
        <Skill img={js} name="Javascript" color="yellow" width="83%" />
        <Skill
          img={bootstrap}
          name="Bootsrtap"
          color="indigo"
          width="90%"
          tl={tl}
        />
      </section>
    </main>
  );
}
