import { PencilIcon, XCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import BoardGameFormModal from './BoardGameFormModal'

const BoardgameItem = ({name, category, year, minPlayer, maxPlayer, edition, designers, handleBgDelete, handleEdit}) => {
    const [isOpen, setIsOpen] = useState(false)

    const editBoardgame = () => {
        setIsOpen(true);
    }

    const deleteBoardgame = () => {
        handleBgDelete();
    }

    return (
        <div className="shadow-inner pt-5 bg-indigo-400 lg:w-1/4 md:w-1/3 rounded-md">
            <BoardGameFormModal 
                open={isOpen}
                
            />
            <div className="flex flex-wrap px-3 mx-3 w-full flex-col">
                <h2 className="bg-indigo-700 text-lg px-2 py-1 text-center m-5 shadow-md rounded-full">{name}</h2>
                <span className="font-bold">Category: </span>{category}
                <span className="font-bold">Year Published: </span>{year ? year : "-"}
                <span className="font-bold">Player count: </span>{minPlayer}-{maxPlayer}
                <span className="font-bold">Edition: </span>{edition ? edition : "-"}
                <span className="font-bold">Designers: </span><ul className="list-square px-14">{designers.map((designer) => (
                    <Designer
                    key={designer['name']}
                    designer={designer['name']}
                    />
                ))}</ul><br/>
            </div>
            <div className="flex justify-between">
                <PencilIcon className="w-5 h-5 m-2 hover:text-yellow-300" onClick={editBoardgame}/>
                <XCircleIcon className="w-5 h-5 text-red-500 m-2 hover:text-red-300" onClick={deleteBoardgame} />
            </div>
        </div>
    )
}

const Designer = ({designer}) => {
    return (
        <li>
        {designer}
        </li>
    )
}

export default BoardgameItem

