// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 395 806"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"197.5"}
        cy={"197.5"}
        r={"179.5"}
        stroke={"currentColor"}
        strokeWidth={"36"}
      ></circle>

      <circle
        cx={"197.5"}
        cy={"608.5"}
        r={"179.5"}
        stroke={"currentColor"}
        strokeWidth={"36"}
      ></circle>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
