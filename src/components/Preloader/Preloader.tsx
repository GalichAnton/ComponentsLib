import React, { FC } from "react";


import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
      <div className={classes.spinnerContainer}>
        <svg
          width="100%"
          viewBox="0 0 276 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="spinner">
            <circle
              id="bottom"
              cx="138"
              cy="138"
              r="50"
              stroke="#408ebf"
              strokeWidth="2"
            />
            <circle
              className={classes.upper}
              cx="138"
              cy="138"
              r="50"
              stroke="#4D30C4"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="150 30"
              style={{ animationDuration: "1.5s" }}
            />

          </g>
        </svg>
      </div>
  );
};

export default Preloader;
