import React, { SVGProps } from "react";

interface IHiddenPasswordProps extends SVGProps<HTMLElement> {
  width?: string;
  height?: string;
  classname?: string;
}

export function HiddenPassword({
  width,
  height,
  className,
}: IHiddenPasswordProps) {
  return (
    <svg
      className={className}
      width={width ?? "24"}
      height={height ?? "23"}
      viewBox={`0 0 ${width ?? "24"} ${height ?? "23"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.18799 11.6053C1.18799 11.6053 5.1196 4.26587 11.9999 4.26587C18.8802 4.26587 22.8118 11.6053 22.8118 11.6053C22.8118 11.6053 18.8802 18.9447 11.9999 18.9447C5.1196 18.9447 1.18799 11.6053 1.18799 11.6053Z"
        stroke="#BEBEBE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.3576C13.6285 14.3576 14.9487 13.1253 14.9487 11.6053C14.9487 10.0853 13.6285 8.85303 12 8.85303C10.3715 8.85303 9.05127 10.0853 9.05127 11.6053C9.05127 13.1253 10.3715 14.3576 12 14.3576Z"
        stroke="#BEBEBE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="0.789451"
        y1="20.2339"
        x2="22.9339"
        y2="2.22419"
        stroke="#BEBEBE"
        strokeWidth="2"
      />
    </svg>
  );
}
