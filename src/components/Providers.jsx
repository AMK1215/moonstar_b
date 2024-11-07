import React, { useContext } from 'react'
import BASE_URL from "../hooks/baseUrl"
import useFetch from '../hooks/useFetch'
// import { casinoAllGames, fishAllGames, hotAllGames, slotAllGames, sportAllGames } from '../const/data';
import GameProviders from './GameProviders';
import GameLists from './GameLists';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Providers() {
    const { content } = useContext(LanguageContext);
    const {data: hotgames} = useFetch(BASE_URL + '/hotgamelist');
    const {data: slots} = useFetch(BASE_URL + '/gameTypeProducts/1');
    const {data: casinos} = useFetch(BASE_URL + '/gameTypeProducts/2');
    const {data: sport} = useFetch(BASE_URL + '/gameTypeProducts/3');
    const {data: fish} = useFetch(BASE_URL + '/gameTypeProducts/4');

    let slotProviders = slots?.game_type?.products;
    let casinoProviders = casinos?.game_type?.products;
    let fishProviders = fish?.game_type?.products;
    let sportProviders = sport?.game_lobby?.products;
    // console.log(slotProviders);
    
    return (
        <div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.hot}</h5>
                <GameLists games={hotgames} />
                {/* <GameProviders providers={slotProviders} type={1} /> */}
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.slot}</h5>
                <GameProviders providers={slotProviders} type={1} />
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.casino}</h5>
                <GameProviders providers={casinoProviders} type={2} />
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.fish}</h5>
                <GameProviders providers={fishProviders} type={8} />
            </div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.sport}</h5>
                <GameProviders providers={sportProviders} type={3} />
            </div>
        </div>
    )
}
