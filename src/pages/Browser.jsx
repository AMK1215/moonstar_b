import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';
import launchGame from '../hooks/LaunchGame';
import { Spinner } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Browser() {
    const  { content } = useContext(LanguageContext);
    const [name, setName] = useState("");
    const { data: games, loading } = useFetch(BASE_URL + "/gameFilter?name=" + name);
    // console.log(games)

    return (
        <>
            <div className="px-4 py-4">
                <h5 className="text-white">{content?.nav?.browse}</h5>
                <input type="text"
                    className="form-control custom-placeholder bg-transparent text-white border-1 border-top-0 border-start-0 border-end-0"
                    placeholder='Search'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <div className="row my-4">
                    {
                        loading ? <Spinner /> : (
                            games && games?.map((game, index) => (
                                <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_type_id, game.product_code, game.code)}>
                                    <img src={game.image_url} className='img-fluid rounded-4 gameImg' />
                                    <small className='d-block text-center gameName'>{game.name}</small>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
