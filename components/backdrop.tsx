import React from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  open:  () => void;
}

type BackdropHookElement = HTMLDivElement | null;

const Backdrop = ({open}: BackdropProps ) => {

  const backdropHookElement = document.getElementById("backdrop-hook") as BackdropHookElement;

  if (!backdropHookElement) {
    console.error("Backdrop hook element not found");
    return null; // or handle the error in a way that makes sense for your application
  }
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={open}></div>,
    backdropHookElement
    // document.getElementById("backdrop-hook")
  );
}
 
export default Backdrop;