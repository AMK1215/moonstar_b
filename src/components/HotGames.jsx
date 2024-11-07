import React from 'react'
import { casinoAllGames, fishAllGames, hotAllGames, slotAllGames, sportAllGames } from '../const/data'

export default function HotGames() {
    return (
        <div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>Popular Games We Love</h5>
                <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                    {hotAllGames.map((game, index) => {
                        return <div key={index} className='homeGame'>
                            <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                            <small className='gameName text-center d-block'>{game.name}</small>
                        </div>
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>Best Slot Games</h5>
                <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                    {slotAllGames.map((game, index) => {
                        return <div key={index} className='homeGame'>
                            <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                            <small className='gameName text-center d-block'>{game.name}</small>
                        </div>
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>Best Casino Games</h5>
                <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                    {casinoAllGames.map((game, index) => {
                        return <div key={index} className='homeGame'>
                            <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                            <small className='gameName text-center d-block'>{game.name}</small>
                        </div>
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>Best Fishing Games</h5>
                <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                    {fishAllGames.map((game, index) => {
                        return <div key={index} className='homeGame'>
                            <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                            <small className='gameName text-center d-block'>{game.name}</small>
                        </div>
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>Best Sport Games</h5>
                <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                    {sportAllGames.map((game, index) => {
                        return <div key={index} className='homeGame'>
                            <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                            <small className='gameName text-center d-block'>{game.name}</small>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
