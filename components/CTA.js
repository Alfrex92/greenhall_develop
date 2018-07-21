import Link from 'next/link'
import Btn from '../components/Btn'

const CTA = (props) => (
    <section className="CTA ComponentSeparation">
        <div className="CTA-bg">
            <div className="CTA-bgLeft"></div>
            <div className="CTA-bgRight"></div>
        </div>
        <div className="container CTA-body">
            <div className="CTA-info">
                <p className="CTA-text">自由が丘駅の近くあるグリーンホールは、植物に彩られた落ち着いた環境の中に有るレンタルスペースです。</p>
                <Btn url="book" text="今すぐに予約して"/>
            </div>
        </div>   
    </section>
)


export default CTA