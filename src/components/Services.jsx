import React, { useLayoutEffect, useRef } from "react";
import Service from "./servicesComponents/Service";

import { ScrollTrigger, gsap } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  let services = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector(".item");

      items.forEach((item) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          scale: 0.75,
          stagger: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        });
      });
    }, services);
    return () => ctx.revert();
  }, []);

  return (
    <main
      className="py-10 bg-darkLite lg:min-h-[80vh]"
      id="services"
      ref={services}
    >
      <section className="text-center item">
        <div className="text-orangeMain underline underline-offset-4  ">
          Services
        </div>
        <div className="font-bold text-5xl text-[white] px-2 my-5">
          What We Do?
        </div>
      </section>

      {/* -------------------- */}
      <section className="flex flex-col md:flex-row gap-5 mt-10 px-5 lg:px-32">
        <div className="item">
          <Service
            title="Front End Web Development"
            details="Do any industrial level professional Front End Web Development and Coding in React JS"
            icon={<i className="fa-solid fa-laptop-code"></i>}
          />
        </div>

        <div className="item">
          <Service
            title="Website Designing"
            details="Professional Website Designing in Figma, Photoshop & XD"
            icon={<i className="fa-brands fa-figma"></i>}
          />
        </div>

        <div className="item">
          <Service
            title="Convert Design into Website"
            details="Convert any Design to Pixel Perfect HTML Website Fully Responsive to all Screen Sizes"
            icon={<i className="fa-solid fa-layer-group"></i>}
          />
        </div>
      </section>
    </main>
  );
}
