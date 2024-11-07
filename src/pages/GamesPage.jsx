import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import all from '../assets/images/all.png'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';
import launchGame from '../hooks/LaunchGame';
import launchLobby from '../hooks/LaunchLobby';

const GamesPage = () => {
  const [type, setType] = useState(1);
  const [providers, setProviders] = useState([]);
  const [gameLists, setGameLists] = useState([]);
  const { data } = useFetch(BASE_URL + '/gameTypeProducts/' + type);
  let gameProviders = data?.game_type?.products;
  let gameLobbies = data?.game_lobby?.products;
  
  const [selectedTab, setSelectedTab] = useState('')
  const [searchParams] = useSearchParams();
  const {data: games, loading} = useFetch(BASE_URL + '/game/gamelist/' + selectedTab + '/' + (type == 4 ? 8 : type));
  const {data: hotGames} = useFetch(BASE_URL + '/hotgamelist');

  
  useEffect(() => {
    if (searchParams.get('type') == 'hot') {
      setType(0);
      setGameLists(hotGames);
    }
    if (searchParams.get('type') == 'slot') {
      setType(1);
      setProviders(gameProviders && gameProviders);
    }
    if (searchParams.get('type') == 'casino') {
      setType(2);
      setProviders(gameProviders);
    }
    if (searchParams.get('type') == 'sport') {
      setType(3);
      setProviders(gameProviders);
    }
    if (searchParams.get('type') == 'fishing') {
      setType(4);
      setProviders(gameProviders);
    }
    if (gameProviders && gameProviders.length > 0) {
      setSelectedTab(gameProviders[0].id);
    }
  }, [searchParams, gameProviders]);

  // console.log(gameLobbies);
  

  return (
    <div className='p-3'>
      <div className="cursor-pointer d-flex align-items-center gap-2 gameProviders">
        {/* <div onClick={() => setSelectedTab('All')} className={` btn1 ${selectedTab === 'All' && 'activeProviderTab'} py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
          <img src={all} className='providerImg ' />
          <small className='providerText'>All</small>
        </div> */}
        {providers?.map((item, index) => {
          return <div onClick={() => setSelectedTab(item.id)} key={index} className={` btn1 ${selectedTab == item.id && 'activeProviderTab'} py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            {/* <img src={item.providerImg} className='providerImg' /> */}
            <small className='providerText'>{item.short_name}</small>
          </div>
        })}
      </div>
      <div className="row my-4">
        {
          loading ? <Spinner /> : (
            games && games?.map((game,index)=>(
              <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_type_id, game.product_code, game.code)}>
                <img src={game.image_url} className='img-fluid rounded-4 gameImg' />
                {/* <small className='d-block text-center gameName'>{game.name}</small> */}
              </div>
            ))
          )
        }
        {
          type == 3 && gameLobbies && gameLobbies?.map((game, index) => (
              <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchLobby(type, game.code)}>
                <img src={game.imgUrl} className='img-fluid rounded-4 gameImg' />
                {/* <small className='d-block text-center gameName'>{game.name}</small> */}
              </div>
          ))
        }
        {
          type == 0 && hotGames && hotGames?.map((game, index) => (
              <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_type_id, game.product_code, game.code)}>
                <img src={game.image_url} className='img-fluid rounded-4 gameImg' />
                {/* <small className='d-block text-center gameName'>{game.name}</small> */}
              </div>
          ))
        }
      </div> 
    </div>
  )
}

export default GamesPage
