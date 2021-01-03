import React, { SVGProps } from "react";

interface IIconCustomersProps extends SVGProps<HTMLElement> {
  width?: string;
  height?: string;
  classname?: string;
}

export function IconCustomers({
  width,
  height,
  className,
}: IIconCustomersProps) {
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
        d="M14.0909 15.727V14.0906C14.0909 13.2226 13.7461 12.3902 13.1324 11.7764C12.5186 11.1627 11.6862 10.8179 10.8182 10.8179H4.27273C3.40475 10.8179 2.57232 11.1627 1.95856 11.7764C1.3448 12.3902 1 13.2226 1 14.0906V15.727"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.54545 7.54545C9.35293 7.54545 10.8182 6.0802 10.8182 4.27273C10.8182 2.46525 9.35293 1 7.54545 1C5.73797 1 4.27272 2.46525 4.27272 4.27273C4.27272 6.0802 5.73797 7.54545 7.54545 7.54545Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15.727V14.0907C18.9995 13.3655 18.7581 12.6611 18.3138 12.088C17.8696 11.5149 17.2476 11.1056 16.5454 10.9243"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2727 1.10596C13.9767 1.2862 14.6007 1.69562 15.0462 2.26967C15.4918 2.84371 15.7337 3.54973 15.7337 4.27641C15.7337 5.0031 15.4918 5.70911 15.0462 6.28316C14.6007 6.8572 13.9767 7.26662 13.2727 7.44687"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
