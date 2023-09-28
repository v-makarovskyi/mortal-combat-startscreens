import React from "react";
import styles from "./MainScreen.module.css";

export default function CharacterItem({
  img,
  isActiveOne,
  isActiveTwo,
  isSelectedOne,
  isSelectedTwo,
}) {
  
  return (
    <div
      className={
        (isActiveOne && !isSelectedOne) ||
        (isActiveTwo && !isSelectedTwo && isSelectedOne)
          ? `${styles.character_item} ${styles.active}`
          : (isActiveOne && isSelectedOne) || (isActiveTwo && isSelectedTwo)
          ? `${styles.character_item} ${styles.selected_one}`
          : styles.character_item
      }
      style={{
        "--color":
          (isActiveOne && !isActiveTwo) || (isActiveTwo && !isSelectedOne)
            ? "red"
            : "yellowgreen",
      }}
    >
      <img src={`characters/icons/${img}`} alt="character" />
      {isActiveOne && (
        <div
          className={
            (isActiveOne && !isSelectedOne) ||
            (isActiveTwo && !isSelectedTwo && isSelectedOne)
              ? `${styles.player_number} ${styles.player_number_anime}`
              : styles.player_number
          }
        >
          1
        </div>
      )}
      {isSelectedOne && isActiveTwo && (
        <div
          className={
            (isActiveOne && !isSelectedOne) ||
            (isActiveTwo && !isSelectedTwo && isSelectedOne)
              ? `${styles.player_number} ${styles.player_number_anime}`
              : styles.player_number
          }
        >
          2
        </div>
      )}
    </div>
  );
}
