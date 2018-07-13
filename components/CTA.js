import Link from 'next/link'

const CTA = (props) => (
    <section className="CTA">
        <div className="container">
            <p>自由が丘駅の近くあるグリーンホールは、植物に彩られた落ち着いた環境の中に有るレンタルスペースです。</p>
            <Link href="/reserve">
                <a>今すぐに予約して</a>
            </Link>
        </div>
        
        <style jsx global> { `
            .CTA {
                background-color: #00D664;
                color:white;
                text-align:center;
            }
        `}
        </style>
    </section>
)


export default CTA