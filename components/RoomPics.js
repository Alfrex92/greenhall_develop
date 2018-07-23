export default (props) => {
    const mypics = props.room.picture;
    return (
        <div className="RoomPics container">
            <h2 className="SectionHeader">Photos</h2>
            <ul className="RoomPics-list  ComponentSeparation">
            {
                mypics.map((pics,index) => (
                    <li className="RoomPics-item" key={pics}>
                        <img src={`../static/img/${pics}.jpg`} alt="" className="RoomPics-img"/>
                    </li>
                ))
            }
            </ul>  
        </div>

    )
}


