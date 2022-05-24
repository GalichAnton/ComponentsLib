import React, { FC, useRef } from "react";

import styles from "./Split.module.css";
import { SplitProps } from "./Split.props";
import { useSplit } from "./useSplit";

const Split: FC<SplitProps> = ({ right, left }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lineX, widthLeft, handlePress] = useSplit(ref);
  return (
    <div
      className={styles.right}
      style={{ backgroundImage: `url(${right})` }}
      ref={ref}
    >
      <div
        className={styles.left}
        style={{
          backgroundImage: `url(${left})`,
          clipPath: `polygon(0% 0%, ${widthLeft}px 0%, ${widthLeft}px 100%, 0% 100%)`,
        }}
      />
      <div
        style={{ left: lineX }}
        className={styles.line}
        onMouseDown={handlePress}
        onTouchStart={handlePress}
      />
    </div>
  );
};

export default Split;
