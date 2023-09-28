import React, { forwardRef, useCallback, useRef, useState } from "react";
import { versusCodesSymbols } from "../../data";
import styles from "./vsScreen.module.css";

const winnerCodes = [311111, 112111, 111113];

const VersusCodesPopup = ({ code }) => {
  
  return (
    <div className={styles.popup}>
        <p>
        You win.<br /> our winning code: "{code}
        Congratulations!
        </p>
    </div>
  )
};

export default VersusCodesPopup;
