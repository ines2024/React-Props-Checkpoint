import React from 'react'
import Player from './Player';
import playersInfo from './Players';

export default function PlayersList() {
    return (
      <div className="playerList" style={{ display: "flex", flexWrap: "wrap" }}>
        {playersInfo.map((player, id) => (
          <Player key={id} player={{ ...player }} />
        ))}
      </div>
    );
  }