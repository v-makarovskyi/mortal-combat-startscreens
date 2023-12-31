import React from "react";
import CharactersList from "./CharactersList";
import SelectedCharacters from "../SelectedCharacters";
import styles from "./MainScreen.module.css";

export default function MainScreen() {
    const handlePlayers = (players) => {
        return (
            <SelectedCharacters
                players={players}
                classes={{
                    left: styles.player_1,
                    right: styles.player_2,
                }}
            />
        )
    }

  return (
    <div className={styles.mainScreen}>
      <div className={styles.container}>
        <h2 className={styles.title}>Select your fighter</h2>
        <div className={styles.content}>
          <CharactersList>
           { handlePlayers }
          </CharactersList>
        </div>
        <h3 className={styles.bottom_title}>Kombat zone: soul chamber</h3>
      </div>
    </div>
  );
}
