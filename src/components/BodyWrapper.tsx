import React from "react";

function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[580px] px-6 pb-[100px] pt-[100px] lg:ml-[40%] lg:px-0">
      {children}
    </div>
  );
}

export default BodyWrapper;
