import {useEffect, useState } from 'react'
import axios from 'axios'
import BoardgameItem from './BoardgameItem';
import BoardGameFormModal from './BoardGameFormModal';

const BoardgameList = () => {
    const [boardgames, setBoardgames] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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

    const refreshList = () => {
        axios
            .get('/api/boardgames')
            .then((res => setBoardgames(res.data)))
            .catch((err) => console.log(err));
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleCreate = (item) => {
        axios.post('/api/boardgames/', item).then(refreshList)
    }

    return (
        <div>
            <BoardGameFormModal open={isOpen} handleClose={closeModal} handleCreate={handleCreate}/>
            <h1 className="min-w-full px-3 py-3 text-2xl bg-green-200" onClick={() => setIsOpen(true)}>Boardgames</h1>
            <div className="flex flex-wrap space-y-5 space-x-5 justify-center">
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
        </div>
    )
}

export default BoardgameList;