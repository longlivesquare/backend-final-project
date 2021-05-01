import {useEffect, useState } from 'react'
import axios from 'axios'
import BoardgameItem from './BoardgameItem';

const BoardgameList = () => {
    const [boardgames, setBoardgames] = useState([]);

    useEffect(() => {
        getGameList();
    },[]);

    const getGameList = () => {
        axios
            .get('/api/boardgames')
            .then((res) => {
                console.log(res.data);
                setBoardgames(res.data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h1>Boardgames</h1>
            {!boardgames ? "Loading..." : boardgames.length === 0 ? "Loading..." : boardgames.map( ({name, category, year_published, min_players, max_players, edition, designer}) => {
                return (
                    <BoardgameItem
                        key={name}
                        name={name}
                        category={category}
                        year={year_published}
                        minPlayer={min_players}
                        maxPlayer={max_players}
                        edition={edition}
                        designers={designer}
                    />
                )
            })}
        </div>
    )
}

export default BoardgameList;