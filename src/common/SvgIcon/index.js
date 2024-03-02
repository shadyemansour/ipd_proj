import React from "react";

export const SvgIcon = ({ src, width, height }) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);

export const SvgTopIcon = ({ src, width, height, color }) => {
  // Assuming src is the SVG content itself, not a file path
  const StyledSvg = src.replace(/stroke=".*?"/g, `stroke="${color}"`);

  return (
    <div
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: StyledSvg }}
    />
  );
};
