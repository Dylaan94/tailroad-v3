import * as React from "react";
type SvgComponentProps = React.SVGProps<SVGSVGElement>;
const ArrowSmall: React.FC<SvgComponentProps> = (props) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_235_31)">
      <path
        d="M45.8332 25C45.8332 13.5 36.4998 4.16666 24.9998 4.16666C13.4998 4.16666 4.1665 13.5 4.1665 25C4.1665 36.5 13.4998 45.8333 24.9998 45.8333C36.4998 45.8333 45.8332 36.5 45.8332 25ZM24.9998 27.0833H16.6665V22.9167H24.9998V16.6667L33.3332 25L24.9998 33.3333V27.0833Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_235_31">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowSmall;
