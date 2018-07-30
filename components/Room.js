import RoomOverview  from '../components/RoomOverview'
import RoomPics  from '../components/RoomPics'
import RoomAgenda  from '../components/RoomAgenda'
import Amenities  from '../components/Amenities'
import MultiTimeTable from '../components/MultiTimeTable'
import TableCafe from './TableCafe'
import TableGallery from './TableGallery'
import TableParty from './TableParty'
import facilityData from '../data/facilityData.json'

export default (props) => {
    const myRoom = facilityData.find (e => e.room === props.roomNumber);
    return (
        <div className="Room">
            <RoomOverview room = {myRoom} />
            <Amenities room = {myRoom} />
            <RoomPics room = {myRoom} />
            <h2 className="SectionHeader">ご利用料金</h2>
            {((myRoom.room === 'Room 201') || (myRoom.room === 'Room 203')) && <MultiTimeTable/>}
            {((myRoom.room === 'Room 304') || (myRoom.room === 'Room 401')) && <TableCafe/>}
            {(myRoom.room === 'Room 401') && <TableGallery/>}
            {((myRoom.room === 'Room 304') || (myRoom.room === 'Room 401')) && <TableParty/>}
            <RoomAgenda room = {myRoom} />
        </div>
    )
}