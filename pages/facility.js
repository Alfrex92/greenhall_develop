import Home from '../components/Home.js'
import RoomOverview  from '../components/RoomOverview'
import RoomPics  from '../components/RoomPics'
import facilityData from '../data/facilityData.json'


export default () => (
    <Home>
       <p>This is the facility page</p>
       <RoomOverview facilityData = {facilityData} roomNumber = 'Room 304' />
       <RoomPics facilityData = {facilityData} roomNumber = 'Room 304' />
       <p>ご利用料金</p>
    </Home>
)

