import React, { useContext } from 'react'
import hot from '../assets/images/hot.png'
import slot from '../assets/images/slot.png'
import sport from '../assets/images/sport.png'
import casino from '../assets/images/casino.png'
import fishing from '../assets/images/fishing.png'
import '../assets/css/gameTabs.css'
import { Link } from 'react-router-dom'

import HotGames from './HotGames'
import Providers from './Providers'
import { LanguageContext } from '../contexts/LanguageContext'

const GameTabs = () => {
  const { content } = useContext(LanguageContext);
    const tabs=[
        {img:hot,name: content?.game_type?.hot,value:'hot'},
        {img:slot,name: content?.game_type?.slot,value:'slot'},
        {img:casino,name: content?.game_type?.casino,value:'casino'},
        {img:fishing,name: content?.game_type?.fish,value:'fishing'},
        {img:sport,name: content?.game_type?.sport,value:'sport'},
    ]
  return (
    <div className='px-2 py-3'>
      <div className="gameTabsHeading d-flex align-items-center gap-2">
            {tabs.map((tab,index)=>{
                return <Link to={'/games?type='+tab.value} key={index} className='cursor-pointer rounded-5 py-1 px-2 text-center gameTab d-flex align-items-center' >
                    <img src={tab.img} className='gameTabImg' />
                    <small className='ms-1 gameTabName'>{tab.name}</small>
                </Link>
            })}
      </div>
      {/* <HotGames /> */}
      <Providers />
    </div>
  )
}

export default GameTabs
