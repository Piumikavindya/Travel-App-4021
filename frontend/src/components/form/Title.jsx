import React from "react";

export default function Title({Children}) {
  return (
    <h1 className=" text-white text-xl font-semibold text-center">{Children}</h1>
  );
}
