import React from "react";
import { ScaleLoader } from "react-spinners";
import variables from "../../JSON/variables.json";
import { createPortal } from "react-dom";

export default function Loading({ isLoading }) {
  return createPortal(
    isLoading && (
      <div
        style={{
          width: "100%",
          position: "fixed", // Change position to fixed
          top: "0",
          zIndex: "10000",
          height: "100vh", // Set height to fill viewport height
          opacity: ".8",
          backgroundColor: `${variables.color.white_3}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition:'0'
        }}
      >
        <ScaleLoader color={variables.color.default} />
      </div>
    ),
    document.getElementById("loading")
  );
}