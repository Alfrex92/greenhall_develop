import Link from 'next/link'
import Btn from '../components/Btn'

const CTA = (props) => (
    <section className="CTA ComponentSeparation">
        <div className="container CTA-body">
            <div className="CTA-info">
                <p　className="CTA-question t2">素敵なコワーキング・レンタル <span className="CTA-br">スペース借りてみませんか？</span></p>
                <p className="CTA-text">Green Hallは自由が丘にある植物に彩られた落ち着いた環境です。普段と違った空間を提供します。</p>
                <Btn url="https://www.smartkaigisitsu.net/properties/index_admin" text="今すぐ予約する" btnModifier="--white"/>
                <p>コワーキングスペースとしての利用も可詳しくは メールにてお問い合わせ下さい</p>
            </div>
        </div>
    </section>
)

export default CTA
