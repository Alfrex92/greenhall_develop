import featuresData from "../data/featuresData.json"


export default (props) => (
    <div className="ComponentSeparation Features container">
    <div className="Features-one ComponentSeparation">
       
        <figure className="Features-photo">
            <img src="./static/img/green-hall_terrace.jpg" alt="" className="Features-img"/>
            <figcaption className="small Features-caption">テラスからは富士山が望みます、高級感のある
                <span className="Features-br">
                    セミナー、パーティー、展覧会(画廊)に最適
                </span>
            </figcaption>
        </figure>
         <div className="Features-description">
            <h3 className="Features-title t3">素敵な眺め</h3>
            <div className="Features-info">東横線大井町線　自由が丘徒歩3分</div>
        </div>
    </div>
   <div className="Features-two">
            <h3 className="t3">緑陰スペース穏やかな雰囲気、木陰でもミーティングでき、詳細にご相談ください</h3>
        <div className="Features-illustration">
            <figure className="Features-photo">
                <img src="./static/img/green-hall_shishiodoshi.jpg" alt="" className="Features-img"/>
                <figcaption className="small Features-caption">鹿威しの心地よい音を奏でています</figcaption>
            </figure>
            <figure className="Features-photo">
                <img src="./static/img/green-hall_suikinkutsu.jpg" alt="" className="Features-img"/>
                <figcaption className="small Features-caption">水琴窟のような伝統的なスペース</figcaption>
        </figure>
        </div>
   </div>
    </div>
)

// export default (props) => (
//     <ul className="ComponentSeparation Features container">
//         {
//             featuresData.map((features,index) => (
//                 <li className="Features-single" key={features.title}>
//                     <figure className="Features-photo">
//                         <img src={`./static/img/${features.img}.jpg`} alt="" className="Features-img"/>
//                         <figcaption className="small Features-caption">{features.caption}</figcaption>
//                     </figure>
//                     <div className="Features-description">
//                         <h3 className="Features-title t3">{features.title}</h3>
//                         <div className="Features-info">{features.info}</div>
//                     </div>
//                 </li>
//             ))
//         }
//     </ul>
// )