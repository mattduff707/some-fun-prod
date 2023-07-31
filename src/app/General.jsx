import Box from '@/components/Box';
import BoxBtn from '@/components/BoxBtn';
import React from 'react';

const General = () => {
  return (
    <section className="bg-seaweed h-[100vh] max-w-full overflow-hidden relative flex flex-col items-center">
      <div className="max-w-constraint pt-10">
        <Box boxClass={'shadow-seaweedShadow border-seaweed bg-pale pt-10 px-12 pb-14 relative'}>
          <h2 className="text-burntDark font-bold text-xl">Howdy and Welcome!</h2>
          <p className="text-lg text-seaweed max-w-[425px] pt-4">
            Some Fun Studio is a distinguished boutique creative studio dedicated to catering to the design and
            programming needs of small businesses and startups in various industries.
          </p>
          <div className="absolute bottom-[-26px] left-[50%] -translate-x-[50%]">
            <BoxBtn
              buttonClass={'border-4 border-seaweed px-12 py-3 font-semibold text-seaweed bg-pale'}
              shadowClass={'bg-burnt'}
            >
              START A PROJECT
            </BoxBtn>
          </div>
        </Box>
      </div>
      <div className="w-full h-[82px] bg-pinky absolute bottom-0"></div>
      <div alt="" className="absolute bottom-0 inline-block w-[1920px] h-[142px] bg-greenSquiggle bg-auto bg-center" />
    </section>
  );
};

export default General;
