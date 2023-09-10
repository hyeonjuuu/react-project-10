import React from 'react';
import CalenderIcon from '@/assets/LandingPage-calender.svg';

function LandingPagePartMiddle() {
  return (
    <div>
      <div className="flex h-[6.25rem] w-[20rem] justify-around bg-gray-100/30">
        <img src={CalenderIcon} alt="plane" />

        <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
          <p>리뷰를 확인하고</p>
          <p>일정을 조율해 보세요!</p>
          <div
            className="absolute
bottom-7  h-2 w-[8.775rem] bg-custom-color/40"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePartMiddle;