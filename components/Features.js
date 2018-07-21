import featuresData from "../data/featuresData.json"


export default (props) => (
    <div className="ComponentSeparation Features container">
        {
            featuresData.map((features,index) => (
                <div className="Features-single" key={features.title}>
                    <figure className="Features-photo">
                        <img src={`./static/img/${features.img}.jpg`} alt="" className="Features-img"/>
                        <figcaption className="Features-caption">{features.caption}</figcaption>
                    </figure>
                    <div className="Features-description">
                        <h3 className="Features-title">{features.title}</h3>
                        <div className="Features-info">{features.info}</div>
                    </div>
                </div>
            ))
        }
    </div>
)