import { FC } from "react";

export const MessageIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="18"
    fill="none"
    viewBox="0 0 22 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3m20 0-10 7L1 3"
    ></path>
  </svg>
);
