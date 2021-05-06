import {useEffect, useState } from 'react'
import axios from 'axios'
import BoardgameItem from './BoardgameItem';
import BoardGameFormModal from './BoardGameFormModal';
import { PlusCircleIcon } from '@heroicons/react/solid'

const BoardgameList = () => {
    const [boardgames, setBoardgames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [createTextHidden, setCreateTextHidden] = useState(true);

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
        <div className="bg-gradient-to-r from-yellow-300 to-green-300">
            <BoardGameFormModal open={isOpen} handleClose={closeModal} handleSubmit={handleSubmit} categories={categories}/>
            <h1 className="min-w-full px-3 py-3 text-2xl bg-green-600 h-20" onClick={() => setIsOpen(true)}>Boardgames</h1>
            <PlusCircleIcon 
                className="w-16 h-16 pl-4 text-green-700 hover:text-green-300" 
                onMouseOver={() => setCreateTextHidden(false)} 
                onMouseLeave={() => setCreateTextHidden(true)} 
                onClick={() => setIsOpen(true)}/>
            <span className={createTextHidden ? "hidden" : "px-4 bg-green-900 text-yellow-400 rounded-md"}>Add a new game</span>
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
                            categ_id={category ? category.id : null}
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