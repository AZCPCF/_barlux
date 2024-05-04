import React from "react";
import Panel from "../Components/Panel";
export default function Home({ children, title }) {
  return <Panel title={title}>{children}</Panel>;
}
