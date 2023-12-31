import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import emailjs from "@emailjs/browser";
gsap.registerPlugin(ScrollTrigger);
import { FadeLoader } from "react-spinners";

export default function Contacts() {
  let contacts = useRef(null);
  let form = useRef();
  const [buttonText, setButtonText] = useState("Get a Quote");
  const loading = (
    <FadeLoader
      color="#ffffff"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
  useLayoutEffect(() => {
    let ctx = gsap.context((self) => {
      let items = self.selector(".item");

      items.forEach((item) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "center 95%",
            end: "center 85%",
            scrub: 1,
          },
        });
      });
    }, contacts);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText(
      <FadeLoader
        color="#ffffff"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

    emailjs
      .sendForm(
        "service_jlhvuut",
        "template_bvm5kle",
        form.current,
        "LOFQ_J8R5GoUBMA9e"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("sent");
          setButtonText("success");
        },
        (error) => {
          console.log(error.text);
          window.alert("error");
        }
      );
  };

  return (
    <main
      className="flex relative w-full bg-darkLite  py-20 md:gap-5 gap-10 flex-col lg:px-32 md:flex-row 
      md:min-h-[70vh]"
      id="contact"
      ref={contacts}
    >
      <div className="absolute font-bold bg-orangeMain   text-[white] text-4xl md:text-6xl  p-4 top-[-3%] md:top-[-8%] left-[45%] ">
        T.
      </div>

      <section className="flex-1 px-5 lg:pl-40 flex flex-col">
        <h6 className="text-orangeMain underline text-sm my-4 self-center md:self-start item">
          Get in Touch
        </h6>

        <h1 className="text-2xl lg:text-5xl font-bold text-[white] mb-8 self-center md:self-start item">
          Talk Or Meet With Me
        </h1>

        {/* contacts here */}
        <section className="flex gap-4 items-center mb-8 item">
          <i className="fa-solid fa-phone text-orangeMain text-4xl"></i>
          <div>
            <div className="text-[grey] text-sm">Call Me Now</div>
            <div className="text-[white] text-lg font-semibold">
              +92318-5505-264
            </div>
          </div>
        </section>

        <section className="flex mb-8 gap-4 items-center item">
          <i className="fa-regular fa-envelope text-orangeMain text-4xl"></i>
          <div>
            <div className="text-[grey] text-sm">Chat With Me</div>
            <div className="text-[white] text-lg font-semibold">
              Taimoorali4214@Gmail.com
            </div>
          </div>
        </section>
        <section className="flex mb-8 gap-4 items-center item">
          <i className="fa-solid fa-handshake text-orangeMain text-4xl"></i>
          <div>
            <div className="text-[grey] text-sm">Meet With Me</div>
            <div className="text-[white] text-lg font-semibold">
              Kotli AJK Pakistan
            </div>
          </div>
        </section>

        <section className="flex gap-4 items-center item">
          <i className="fa-solid fa-laptop-file text-orangeMain text-4xl"></i>
          <div>
            <div className="text-[grey] text-sm">Have a Project</div>
            <div className="text-[white] text-lg font-semibold">
              fiverr.com/taimoorali33
            </div>
          </div>
        </section>

        {/* contacts here */}
      </section>

      <section className="flex-1 px-5">
        <h6 className="text-orangeMain underline text-sm my-4 text-center md:text-start item">
          Estimate Project
        </h6>

        <h1 className="text-2xl lg:text-5xl font-bold text-[white] mb-8 text-center md:text-start item">
          Let Me Know Here
        </h1>

        <form
          name="form"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Enter your name here"
            className="p-4 bg-[grey] item"
            name="sender-name"
          />
          <input
            type="email"
            placeholder="Enter your email here"
            className="p-4 bg-[grey] item"
            name="sender-email"
          />
          <textarea
            name="message"
            id=""
            cols="20"
            rows="5"
            placeholder="Tell me details about project"
            className="p-4 bg-[grey] item"
          ></textarea>
          <button
            type="submit"
            className="text-[white] font-semibold text-sm bg-orangeMain self-start h-16 w-40 flex justify-center items-center "
          >
            {buttonText}
          </button>
        </form>
      </section>
    </main>
  );
}
