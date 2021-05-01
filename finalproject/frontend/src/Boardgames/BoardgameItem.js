const BoardgameItem = ({name, category, year, minPlayer, maxPlayer, edition, designers}) => {
    return (
        <div>
            <h2>{name}</h2>
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