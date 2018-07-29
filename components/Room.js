import RoomOverview  from '../components/RoomOverview'
import RoomPics  from '../components/RoomPics'
import RoomAgenda  from '../components/RoomAgenda'
import Amenities  from '../components/Amenities'
import MultiTimeTable from '../components/MultiTimeTable'
import facilityData from '../data/facilityData.json'

export default (props) => {
    const myRoom = facilityData.find (e => e.room === props.roomNumber);
    return (
        <div className="Room">
            <MultiTimeTable room = {myRoom}/>
            <RoomOverview room = {myRoom} />
            <Amenities room = {myRoom} />
            <RoomPics room = {myRoom} />
            <RoomAgenda room = {myRoom} />
        </div>
    )
}