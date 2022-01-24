import React, { CSSProperties } from "react";
const CURVE_POINT_X_DELTA = 10;
const CURVE_POINT_Y_DELTA = 10;

const SVG_STYLE: CSSProperties = {
  position: "absolute",
  stroke: "black",
  strokeWidth: 2,
  fill: "none",
};

export const ConnectingLine = React.memo<{
  from: { x: number; y: number };
  to: { x: number; y: number };
}>(({ from, to }) => {
  const startPosition = `${from.x} ${from.y}`;
  const startCurve = `${from.x + CURVE_POINT_X_DELTA} ${
    from.y - CURVE_POINT_Y_DELTA
  }`;
  const endCurve = `${to.x - CURVE_POINT_X_DELTA} ${
    to.y + CURVE_POINT_Y_DELTA
  }`;
  const endPosition = `${to.x} ${to.y}`;
  return (
    <svg style={SVG_STYLE}>
      <path
        d={`M ${startPosition}C ${startCurve} ${endCurve} ${endPosition}`}
      />
    </svg>
  );
});
