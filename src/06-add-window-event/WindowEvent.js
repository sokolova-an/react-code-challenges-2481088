import { useEffect } from "react";

export default function WindowEvent() {
  useEffect(() => {
    const dblclick = () => {
      alert("Double-clicked!");
    };
    window.addEventListener("dblclick", dblclick);
    return () => {
      window.removeEventListener("dblclick", dblclick);
    };
  }, []);

  return <h2>Window event active</h2>;
}
