import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Navbar() {
  let [hidden, setHidden] = useState(true);
  let [search, setSearch] = useState(false);

  let myRef = useRef(null);
  let tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline().from(myRef.current, {
        height: 0,
        opacity: 0,
        delay: 2,
      });
    }, myRef);
    return () => ctx.revert();
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector("nav").classList.add("shadow-lg");
    }
  });

  const showLinks = () => {
    setHidden((prev) => !prev);
  };

  const showSearch = () => {
    setSearch((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav
        className="flex lg:px-32 px-2 py-2 justify-between items-center text-[#c9c9c9] bg-darkPrimary  
      gap-5 sticky top-0 z-50"
        ref={myRef}
      >
        <div className="bg-orangeMain h-10 md:h-14 md:text-4xl flex items-center justify-center aspect-square text-[white] font-bold text-xl md:my-2">
          T.
        </div>

        <div
          className="flex  flex-col md:flex-row py-8 md:py-0 absolute md:relative top-0 gap-10 bg-darkLite text-2xl md:text-lg min-h-[100vh] md:min-h-[auto] md:bg-transparent md:justify-center w-0 md:w-full overflow-hidden transition-all"
          style={{ width: !hidden && "80vw" }}
        >
          <a
            href="#"
            className=" hover:text-orangeMain border-b-2 py-2 md:border-b-0  md:py-0"
            onClick={showLinks}
          >
            Home
          </a>
          <a
            href="#about"
            className=" hover:text-orangeMain border-b-2 md:border-b-0 py-2 md:py-0"
            onClick={showLinks}
          >
            About
          </a>
          <a
            href="#services"
            className=" hover:text-orangeMain border-b-2 py-2 md:border-b-0  md:py-0"
            onClick={showLinks}
          >
            Services
          </a>
          <a
            href="#work"
            className=" hover:text-orangeMain border-b-2 py-2 md:border-b-0  md:py-0"
            onClick={showLinks}
          >
            Works
          </a>
          <a
            href="#skills"
            className=" hover:text-orangeMain border-b-2 py-2 md:border-b-0  md:py-0"
            onClick={showLinks}
          >
            Skills
          </a>
          <a
            href="#contact"
            className=" hover:text-orangeMain border-b-2 py-2 md:border-b-0 md:py-0"
            onClick={showLinks}
          >
            Contact
          </a>
        </div>
        <div className="flex gap-3 text-xl md:text-2xl items-center">
          <i
            className="fa-solid fa-magnifying-glass hover:text-orangeMain"
            onClick={showSearch}
          ></i>
          {(hidden && (
            <i
              className="fa-solid fa-bars-staggered bg-orangeMain h-10 md:h-14 aspect-square flex items-center justify-center text-[white]"
              onClick={showLinks}
            ></i>
          )) || (
            <i
              className="fa-solid fa-xmark  bg-orangeMain h-10 md:h-14 aspect-square flex items-center justify-center  text-[white]"
              onClick={showLinks}
            ></i>
          )}
        </div>
      </nav>

      <div
        className="flex w-full justify-center items-center mt-1 h-0 overflow-hidden transition-all absolute rounded-md"
        style={{ height: search && "60px" }}
      >
        <input type="search" className="px-5 py-3 md:w-[65%] w-full" />
      </div>
    </div>
  );
}

export default Navbar;
