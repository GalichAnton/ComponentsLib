import { RefObject, useEffect, useState } from "react";

export const useSplit = (
  ref: RefObject<HTMLDivElement>
): [number, number, () => void] => {
  const [isPress, setIsPress] = useState(false);
  const [lineX, setLineX] = useState(0);
  const [widthLeft, setWidthLeft] = useState(0);

  const handlePress = () => {
    setIsPress(true);
  };
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      setLineX((x) => computeState(x, e, ref));
      setWidthLeft((x) => computeState(x, e, ref));
    };
    if (isPress) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [isPress]);
  useEffect(() => {
    const handleUp = () => {
      setIsPress(false);
    };
    if (!ref.current) return;
    setLineX(ref.current.clientWidth / 2);
    setWidthLeft(ref.current.clientWidth / 2);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);
  return [lineX, widthLeft, handlePress];
};

function computeState(
  x: number,
  e: MouseEvent | TouchEvent,
  ref: RefObject<HTMLDivElement>
) {
  if (!ref.current) return 0;
  let pos: number;
  if ("movementX" in e) {
    pos = x + e.movementX;
  } else {
    pos = e.touches[0].pageX - ref.current.offsetLeft;
  }
  if (pos >= 0 && pos <= ref.current.clientWidth) {
    return pos;
  }
  return x;
}
