import * as React from "react";

function SvgMytagline(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={816} height={678} {...props}>
      <g fill="#3e3e3e" fontSize={150} fontFamily="SegoeUIBlack, Segoe UI">
        <text>
          <tspan x={0} y={162}>
            {"INNOVATE"}
          </tspan>
        </text>
        <text transform="translate(0 236)">
          <tspan x={0} y={162}>
            {"DESIGN"}
          </tspan>
        </text>
        <text transform="translate(0 478)">
          <tspan x={0} y={162}>
            {"BUILD"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgMytagline;
