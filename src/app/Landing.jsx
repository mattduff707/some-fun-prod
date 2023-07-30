import LandingSvg from "@/components/LandingSvg";
import React from "react";

const Landing = () => {
  return (
    <section className="w-full bg-landing flex justify-center">
      <div className="flex justify-center w-full max-w-constraint">
        <LandingSvg />
      </div>
    </section>
  );
};

export default Landing;
