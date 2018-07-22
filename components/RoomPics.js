export default (props) => {
    const myRoom = props.facilityData.find (e => e.room === props.roomNumber),
    mypics = myRoom.picture;
    return (
        <ul className="RoomPics">
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


