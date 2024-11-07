import React from 'react'
import launchGame from '../hooks/LaunchGame'

export default function GameLists({games}) {
    
    return (
        <div>
            <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                {games && games.map((game, index) => {
                    return <div key={index} className='homeGame cursor-pointer' onClick={launchGame(game.game_type_id, game.product_code, game.code)}>
                        <img src={game.image_url} className='homeGameImg img-fluid  rounded-4 ' />
                        <small className='gameName text-center d-block'>{game.name}</small>
                    </div>
                })}
            </div>
        </div>
    )
}
