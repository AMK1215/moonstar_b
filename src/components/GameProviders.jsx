import React from 'react'
import launchLobby from '../hooks/LaunchLobby'

export default function GameProviders({providers, type}) {
    
    return (
        <div>
            <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                {providers && providers.map((game, index) => {
                    return <div key={index} className='homeGame cursor-pointer' onClick={launchLobby(type,game.code)}>
                        <img src={game.imgUrl} className='homeGameImg img-fluid  rounded-4 ' />
                        <small className='gameName text-center d-block'>{game.name}</small>
                    </div>
                })}
            </div>
        </div>
    )
}
