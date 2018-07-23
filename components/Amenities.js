export default (props) => {

    return (
        <div className="Amenities container ComponentSeparation">
         {
            props.room.amenities.map((data,index) => (
                <div className="Amenities-single" key={index}>
                    <p className="Amenities-title">{data.name}</p>
                    <ul className="Amenities-list">
                    {data.value.map((value,index)=> (
                        <li key={index}>{value}</li>
                    ))}
                    </ul>
                </div>
            ))
        }   
        </div>
    )
} 

//https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key
// https://stackoverflow.com/questions/22876978/loop-inside-react-jsx

// {values.map((data,index) => (
//     <p>{data}</p>
// ))}