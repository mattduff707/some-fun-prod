import React from "react";
import Box from "./Box";
import TitleText from "./TitleText";

const Title = ({ children, boxClass, titleClass }) => {
  return (
    <Box
      boxClass={`${boxClass} w-[440px] h-[100px] max500:w-[330px] max500:h-[75px] `}
    >
      <TitleText titleClass={titleClass}>{children}</TitleText>
    </Box>
  );
};

export default Title;
