export default (props) => { 
    
    let bgStyle ={
        backgroundImage : `url('../static/img/${props.room.image}.jpg')`
    }
    return (

    <div className="Cover ComponentSeparation">
        <div className="Cover-image Cover-room" style={bgStyle}></div>
        <div className="Cover-container">
            <div className="Cover-description">
            <p className="Cover-subheader">{props.room.type}</p>
            <h1 className="t2 Cover-header">{props.room.room}</h1>
            <p className="Cover-info">
            {props.room.overview}
            </p>
            </div>
        </div>
    </div>

)}

