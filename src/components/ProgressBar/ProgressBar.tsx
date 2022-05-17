import React from "react";

import { usePagePercent } from "../../hooks/usePagePercent";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const percent = usePagePercent();
  return <div style={{ width: `${percent}%` }} className={styles.progress} />;
};

export default ProgressBar;
