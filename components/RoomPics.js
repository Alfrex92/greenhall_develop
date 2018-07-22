export default (props) => {
    const mypics = props.room.picture;
    return (
        <ul className="RoomPics container ComponentSeparation">
        {
            mypics.map((pics,index) => (
                <li className="RoomPics-item" key={pics}>
                    <img src={`../static/img/${pics}.jpg`} alt="" className="RoomPics-img"/>
                </li>
            ))
        }
        </ul>
    )
}


