import React, { forwardRef, useCallback, useRef, useState } from "react";
import { versusCodesSymbols } from "../../data";
import styles from "./vsScreen.module.css";

const VersusCodesPopup = ({ code }) => {
  
  return (
    <div className={styles.popup}>
        <p>
        Congratulations!
        You win.<br /> our winning code: {code}
        </p>
    </div>
  )
};

export default VersusCodesPopup;
