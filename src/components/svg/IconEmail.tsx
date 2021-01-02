import React, { SVGProps } from "react";

interface IIconEmailProps extends SVGProps<HTMLElement> {
  width?: string;
  height?: string;
  classname?: string;
}

export function IconEmail({ width, height, className }: IIconEmailProps) {
  return (
    <svg
      className={className}
      width={width ?? "74"}
      height={height ?? "60"}
      viewBox={`0 0 ${width ?? "74"} ${height ?? "60"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3334 3.33325H63.6667C67.3334 3.33325 70.3334 6.33325 70.3334 9.99992V49.9999C70.3334 53.6666 67.3334 56.6666 63.6667 56.6666H10.3334C6.66675 56.6666 3.66675 53.6666 3.66675 49.9999V9.99992C3.66675 6.33325 6.66675 3.33325 10.3334 3.33325Z"
        stroke="#374952"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.3334 10L37.0001 33.3333L3.66675 10"
        stroke="#374952"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
