export default (props) => (
    <div className="RoomAgenda container ComponentSeparation">
        <iframe src= {props.room.calendar} frameBorder="0"
         width="100%" height="100%"  scrolling="no"></iframe>
    </div>
)

