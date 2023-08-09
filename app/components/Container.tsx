"use client";

import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  classNames?: string;
}

const Container: FC<ContainerProps> = ({ children, classNames = "" }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto xl:px-0 md:px-2 sm:px-2 px-4 ${classNames}`}
    >
      {children}
    </div>
  );
};

export default Container;
