import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = () => {
  return (
    <div className="user flex min-w-[290px] items-center gap-4 bg-slate-200 rounded-lg">
    <ContentLoader 
      speed={1.5}
      width={290}
      height={107}
      viewBox="0 0 290 107"
      backgroundColor="#9daad2"
      foregroundColor="#93a3c8"
    >
      <circle cx="47" cy="55" r="35" /> 
      <rect x="98" y="42" rx="5" ry="5" width="110" height="25" />
    </ContentLoader>
    </div>
  );
};

export default Sceleton;
