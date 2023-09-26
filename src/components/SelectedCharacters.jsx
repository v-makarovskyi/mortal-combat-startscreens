import React from 'react'

export default function SelectedCharacters({ classes, players }) {
  return (
    <>
        <div className={classes.left}>
            <img src={`characters/large/${players.player1?.image_large}`} alt='player_1' />
        </div>
        <div className={classes.right}>
            <img src={`characters/large/${players.player2?.image_large}`} alt='player_2' />
        </div>
    </>
  )
}
