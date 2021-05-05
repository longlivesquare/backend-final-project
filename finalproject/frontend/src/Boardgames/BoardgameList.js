import {useEffect, useState } from 'react'
import axios from 'axios'
import BoardgameItem from './BoardgameItem';
import BoardGameFormModal from './BoardGameFormModal';

const BoardgameList = () => {
    const [boardgames, setBoardgames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getGameList();
    },[]);

    useEffect(() => {
        getCatList();
    }, []);

    const getCatList = () => {
        axios
            .get('/api/category')
            .then(res => {
                setCategories(res.data);
            }
                )
            .catch((err) => console.log(err));
    }

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

    const handleSubmit = (item) => {
        if(item.pk) {
            axios.put(`/api/boardgames/${item.pk}/`, item).then(refreshList)
        } else {
            axios.post('/api/boardgames/', item).then(refreshList)
        }
    }

    return (
        <div>
            <BoardGameFormModal open={isOpen} handleClose={closeModal} handleSubmit={handleSubmit} categories={categories}/>
            <h1 className="min-w-full px-3 py-3 text-2xl bg-green-200" onClick={() => setIsOpen(true)}>Boardgames</h1>
            <div className="pb-5"></div>
            <div className="flex flex-wrap space-y-5 space-x-5 justify-center">
                {!boardgames ? "Loading..." : boardgames.length === 0 ? "Loading..." : boardgames.map( ({pk, name, category, year_published, min_players, max_players, edition, designer}) => {
                    const deleteBoardgame = () => {
                        axios
                            .delete(`/api/boardgames/${pk}/`)
                            .then(() => refreshList());
                    }
                    
                    return (
                        <BoardgameItem
                            key={pk}
                            pk={pk}
                            name={name}
                            category={category ? category.type : null}
                            year={year_published}
                            minPlayer={min_players}
                            maxPlayer={max_players}
                            edition={edition}
                            designers={designer}
                            categories={categories}
                            handleBgDelete={deleteBoardgame}
                            handleEdit={handleSubmit}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BoardgameList;