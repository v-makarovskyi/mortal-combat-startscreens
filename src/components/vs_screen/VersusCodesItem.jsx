import React from "react";
import styles from "./vsScreen.module.css";

export default function VersusCodesItem({ symbol }) {
  return (
    <div
      className={styles.versus_codes_item}
      style={{ backgroundPosition: symbol.position }}
    ></div>
  );
}
