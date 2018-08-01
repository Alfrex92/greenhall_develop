import FacilityData from '../../data/facilityData.json'
import Link from 'next/link'

// crear un array con los objetos con los nombres de los cuartos y luego
// ponerlos dentro de Link
const Facility = () => (
    <div className="Facility">
        <ul className="Facility-list">

    {
        FacilityData.map((facility, index) => {
            return (
                // I do not need to use fragment i just use because i want it to test it
                <React.Fragment key={facility.image}>
                    <Link href={`facility/${facility.link}`}>
                        <li className="Facility-item">
                            <a href={`facility/${facility.link}`}>
                                <div className="Facility-illustration">
                                    <img src={`../../static/img/${facility.image}.jpg`}   className="Facility-img" alt={`自由が丘グリーンホール ${facility.room} `}/>
                                </div>
                                <p className="Facility-room">{facility.room}</p>
                                <p className="Facility-capacity">収容人数：{facility.capacity}</p>
                                <p className="Facility-use">利用:{facility.use}</p>
                            </a>
                        </li>
                    </Link>

                </React.Fragment>
            )
        })
    }
        </ul>
    </div>
)

// <p className="Facility-type">{facility.type}</p>

export default Facility
