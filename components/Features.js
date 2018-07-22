import featuresData from "../data/featuresData.json"


export default (props) => (
    <ul className="ComponentSeparation Features container">
        {
            featuresData.map((features,index) => (
                <li className="Features-single" key={features.title}>
                    <figure className="Features-photo">
                        <img src={`./static/img/${features.img}.jpg`} alt="" className="Features-img"/>
                        <figcaption className="small Features-caption">{features.caption}</figcaption>
                    </figure>
                    <div className="Features-description">
                        <h3 className="Features-title t3">{features.title}</h3>
                        <div className="Features-info">{features.info}</div>
                    </div>
                </li>
            ))
        }
    </ul>
)