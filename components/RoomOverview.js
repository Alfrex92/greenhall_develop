export default (props) =>
    {
        const myRoom = props.facilityData.find (e => e.room === props.roomNumber)
        return (
            <div className="RoomOverview container">
                <div className="RoomOverview-description">
                    <p>{myRoom.overview}</p>
                </div>
                <div className="RoomOverview-table">
                    <p>blabababab</p>
                </div>
            </div>
        )

    } 