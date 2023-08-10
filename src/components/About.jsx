import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  let about = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector(".item");
      items.forEach((item) => {
        gsap.from(item, {
          y: 100,
          scale: 0.75,
          opacity: 0,
          stagger: 1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top 60%",
            scrub: true,
          },
        });
      });
    }, about);
    return () => ctx.revert();
  }, []);

  return (
    <main
      id="about"
      className="flex flex-col md:flex-row gap-20 bg-darkPrimary text-[white] py-16 lg:px-32 lg:min-h-[80vh]"
      ref={about}
    >
      {/* ---------------------------------- */}
      <section className="md:max-w-[50%] flex flex-col gap-5 px-4 item">
        <div className="text-orangeMain flex gap-2 items-center justify-between underline underline-offset-4">
          About Me
          <div className="h-1 w-[20%] bg-orangeMain"></div>
        </div>

        <p className="font-semibold text-2xl">
          You Cant use up creativity. <br />
          The more you use, the more you have in your significant mind.
        </p>
        <p className="text-[grey] text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
          delectus non illum nobis cumque? Delectus, repellendus adipisci!
          Laudantium perferendis quidem quasi mollitia dolorum non saepe
          deserunt vitae. Repellat, placeat non adipisci numquam, error unde ut
          ad accusantium veritatis possimus eius! Vitae praesentium, sequi animi
          tempora minus sed quae ipsam quos.
        </p>

        <div className="flex gap-2 items-center">
          <div className="text-orangeMain font-bold text-6xl">30</div>

          <div className="font-semibold">
            Years of <br /> Experiance
          </div>
        </div>
      </section>
      {/* ---------------------------------------- */}
      <section className="flex flex-col md:max-w-[50%] px-4 gap-3 item">
        <p className="font-extrabold text-5xl">
          Any Type Of Qury <br />& Discussion.
        </p>

        <span className="text-[grey]">Lets talk with me</span>

        <div className="text-orangeMain text-xl mt-auto font-semibold flex justify-between items-center">
          <a href="#">info@example.com</a>
          <i className="fa-solid fa-arrow-right text-4xl"></i>
        </div>
      </section>
    </main>
  );
}
