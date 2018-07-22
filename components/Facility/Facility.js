import FacilityData from '../../data/facilityData.json'


const Facility = () => (
    <div className="Facility">
        <ul className="Facility-list">
        
    {
        FacilityData.map((facility, index) => {
            return (
                // I do not use fragment i just use because i want it to test it 
                <React.Fragment key={facility.image}>
                    <li className="Facility-item">
                        <img src={`../../static/img/${facility.image}.jpg`}   className="Facility-img" alt={`自由が丘グリーンホール ${facility.room} `}/>
                        <p className="Facility-room">{facility.room}</p>
                        <p className="Facility-capacity">収容人数：{facility.capacity}</p>
                        <p className="Facility-use">利用:{facility.use}</p>
                    </li>
                </React.Fragment>
            )
        })
    }
        </ul>
    </div>
)

export default Facility 