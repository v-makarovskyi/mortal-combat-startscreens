import React, { useContext, useEffect } from "react";
import SelectedCharacters from "../SelectedCharacters";
import { MainContext } from "../../context/mainContext";
import VersusCodes from "./VersusCodes";
import styles from "./vsScreen.module.css";

export default function VsScreen() {
  const { selectedPlayers, setActiveScreen } = useContext(MainContext);

 /*  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveScreen(0);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setActiveScreen]); */

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <h2 className={styles.title}>BATTLE <br/>1</h2>
            <div className={`${styles.logo_dragon} ${styles.left}`}></div>
            <div className={`${styles.logo_dragon} ${styles.right}`}></div>
            <div className={styles.vs_container}>
              <img src='/characters/vs-icon.webp' alt='VS' />
            </div>
            <SelectedCharacters
              players={selectedPlayers}
              classes={{
                left: styles.player_one,
                right: styles.player_two,
              }} 
            />
            <VersusCodes />
        </div>
    </div>
  )
}
