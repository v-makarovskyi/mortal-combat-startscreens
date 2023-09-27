import React from 'react'

export default function SelectedCharacters({ classes, players }) {
  return (
    <>
        <div className={classes.left}>
            <img src={`characters/large/${players.playerOne?.image_large}`} alt='player_1' />
        </div>
        <div className={classes.right}>
            <img src={`characters/large/${players.playerTwo?.image_large}`} alt='player_2' />
        </div>
    </>
  )
}
