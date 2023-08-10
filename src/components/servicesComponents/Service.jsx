import React from "react";

export default function Service(props) {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-stretch md:justify-between gap-5 px-1 py-2 h-[20rem]"
      id="service-container"
    >
      <div className="text-orangeMain text-6xl">{props.icon}</div>
      <div className="font-bold  text-[white] text-xl text-center">
        {props.title}
      </div>
      <div className="text-[white] text-center">{props.details}</div>
      <div className="flex gap-2 w-full justify-center items-center">
        <div className="h-1 w-[10%] bg-[grey]"></div>
        <div className="text-orangeMain w-0 overflow-hidden" id="text">
          Service
        </div>
        <div className="h-1 w-[10%] bg-[grey]"></div>
      </div>
    </div>
  );
}
