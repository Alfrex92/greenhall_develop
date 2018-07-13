import Link from 'next/link'
import Btn from '../components/Btn'

const CTA = (props) => (
    <section className="CTA">
        <div className="CTA-bg">
            <div className="CTA-imgLeft"></div>
            <div className="CTA-imgRight"></div>
        </div>
        <div className="container CTA-body">
            <p>自由が丘駅の近くあるグリーンホールは、植物に彩られた落ち着いた環境の中に有るレンタルスペースです。</p>
            <Btn url="book" text="今すぐに予約して"/>
        </div>
        
       
    </section>
)


export default CTA