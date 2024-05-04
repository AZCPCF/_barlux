import React from "react";
import { ScaleLoader } from "react-spinners";
import Colors from "../Assets/colors";
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
          backgroundColor: `${Colors.white_4}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScaleLoader color={Colors.default} />
      </div>
    ),
    document.getElementById("loading")
  );
}
