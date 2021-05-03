const BoardgameItem = ({name, category, year, minPlayer, maxPlayer, edition, designers}) => {
    return (
        <div class="shadow-inner flex-grow-0 px-8 mx-3 bg-indigo-400 lg:w-1/4 md:w-1/3 w-full rounded-md">
            <h2 class="bg-indigo-700 text-lg px-2 py-1 text-center m-5 shadow-md rounded-full">{name}</h2>
            <b>Category: </b>{category}<br/>
            <b>Year Published: </b>{year ? year : "-"}<br/>
            <b>Player count: </b>{minPlayer}-{maxPlayer}<br/>
            <b>Edition: </b>{edition ? edition : "-"}<br/>
            <b>Designers: </b><ul>{designers.map((designer) => (
                <Designer
                key={designer}
                designer={designer}
                />
            ))}</ul><br/>
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