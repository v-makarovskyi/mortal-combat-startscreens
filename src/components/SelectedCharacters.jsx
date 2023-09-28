import React from 'react'

export default function SelectedCharacters({ classes, players }) {
  return (
    <>
        <div className={classes.left}>
            <img src={`characters/large/${players.player_1?.image_large}`} alt='player_1' />
        </div>
        <div className={classes.right}>
            <img src={`characters/large/${players.player_2?.image_large}`} alt='player_2' />
        </div>
    </>
  )
}
