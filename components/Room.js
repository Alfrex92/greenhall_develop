import RoomOverview  from '../components/RoomOverview'
import RoomPics  from '../components/RoomPics'
import facilityData from '../data/facilityData.json'

export default (props) => {
    const myRoom = facilityData.find (e => e.room === props.roomNumber);
    return (
        <div className="Room">
            <RoomOverview room = {myRoom} />
            <RoomPics room = {myRoom} />
        </div>
    )
}