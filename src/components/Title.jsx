import React from "react";
import Box from "./Box";
import TitleText from "./TitleText";

const Title = ({ children, boxClass, titleClass }) => {
  return (
    <Box
      boxClass={`${boxClass} w-[440px] h-[100px] max600:w-[330px] max600:h-[75px] p-0 pt-0 max600:p-0 max600:pt-0`}
    >
      <TitleText titleClass={titleClass}>{children}</TitleText>
    </Box>
  );
};

export default Title;
