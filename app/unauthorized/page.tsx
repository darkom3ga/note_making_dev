"use client";

export default function Unauthorized401() {
  return  (
    <div className="relative min-h-screen  ">
      <div className="w-full relative flex justify-center items-center h-40 top-[230px] text-white ">
        <div className="w-full absolute z-10 justify-center items-center flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold">You are not authorized.</h1>
          <p className="mt-3 text-center max-w-sm text-sm md:text-base font-light">
            You tried to access a page you did not have prior authorization for.
          </p>
        </div>
       
        <div className="absolute z-0">
          <h1 className="font-varela  text-[12rem] md:text-[14rem] text-[#151515] tracking-wider mb-3">403</h1>
        </div>
      </div>
    </div>
    );
}
