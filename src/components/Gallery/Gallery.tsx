import React, { FC, useState } from "react";

import cn from "classnames";

import arrow from "../../assets/arrow.svg";
import styles from "./Gallery.module.css";
import { IGalleryProps } from "./Gallery.props";
const FADE_DURATION = 300;
const Gallery: FC<IGalleryProps> = ({ reviews }) => {
  const [slide, setSlide] = useState(0);
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const handleClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((s) => s + move);
      setFadeState("fade-in");
    }, FADE_DURATION);
    clearTimeout(currentTimer!);
    setFadeState("fade-out");
    setCurrentTimer(timer);
  };
  return (
    <div className={styles.gallery}>
      <div className={cn(styles.slide, styles[fadeState])}>
        <div className={styles.left}>
          <div className={styles.text}>{reviews[slide].text}</div>
          <div className={styles.name}>{reviews[slide].name}</div>
          <div className={styles.job}>{reviews[slide].job}</div>
        </div>
        <div
          className={styles.right}
          style={{ backgroundImage: `url(${reviews[slide].image})` }}
        />
      </div>
      {slide > 0 && (
        <button
          className={cn(styles.arrow, styles.arrowLeft)}
          onClick={() => handleClick(-1)}
        >
          <img src={arrow} alt="arrow" />
        </button>
      )}
      {slide < reviews.length - 1 && (
        <button
          className={cn(styles.arrow, styles.arrowRight)}
          onClick={() => handleClick(1)}
        >
          <img src={arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Gallery;
