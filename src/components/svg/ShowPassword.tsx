import React, { SVGProps } from "react";

interface IShowPassordProps extends SVGProps<HTMLElement> {
  width?: string;
  height?: string;
  classname?: string;
}

export function ShowPassord({ width, height, className }: IShowPassordProps) {
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
        d="M1.99561 11.3394C1.99561 11.3394 5.92722 4 12.8075 4C19.6879 4 23.6195 11.3394 23.6195 11.3394C23.6195 11.3394 19.6879 18.6788 12.8075 18.6788C5.92722 18.6788 1.99561 11.3394 1.99561 11.3394Z"
        stroke="#BEBEBE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8076 14.0917C14.4361 14.0917 15.7563 12.8595 15.7563 11.3394C15.7563 9.8194 14.4361 8.58716 12.8076 8.58716C11.1791 8.58716 9.85889 9.8194 9.85889 11.3394C9.85889 12.8595 11.1791 14.0917 12.8076 14.0917Z"
        stroke="#BEBEBE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
