import React from "react";

import black from "../../assets/black.jpg";
import red from "../../assets/red.jpg";
import Split from "./Split";
import styles from "./Split.module.css";
const SplitWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Split left={red} right={black} />
    </div>
  );
};

export default SplitWrapper;
