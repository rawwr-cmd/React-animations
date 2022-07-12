import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "BackDrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};
export default backdrop;
