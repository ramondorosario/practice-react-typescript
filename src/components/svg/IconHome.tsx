import React, { SVGProps } from "react";

interface IIconHomeProps extends SVGProps<HTMLElement> {
  width?: string;
  height?: string;
  classname?: string;
}

export function IconHome({ width, height, className }: IIconHomeProps) {
  return (
    <svg
      className={className}
      width={width ?? "18"}
      height={height ?? "20"}
      viewBox={`0 0 ${width ?? "18"} ${height ?? "20"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.22222L9 1L17 7.22222V17C17 17.4715 16.8127 17.9237 16.4793 18.2571C16.1459 18.5905 15.6937 18.7778 15.2222 18.7778H2.77778C2.30628 18.7778 1.8541 18.5905 1.5207 18.2571C1.1873 17.9237 1 17.4715 1 17V7.22222Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33333 18.7776V9.88867H11.6667V18.7776"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
