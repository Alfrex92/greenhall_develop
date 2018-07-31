import Head from 'next/head'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Access from '../components/Access'
import GlobalStyles from '../components/GlobalStyles'



// add responsive problem
export default () => (
    <Home>
        <GlobalStyles/>
        <Head>
            <meta name="description" content="testing the description of this " />
        </Head>
        <div className="AccessMap">
            <div className="Cover ComponentSeparation AccessMap-content">
                <div className="AccessMap-illustration">
                    <img src="/static/img/green-hall_map.jpg" className="AccessMap-img"></img>
                    <div className="Access-container">
                        <a target="_blank" className="Access-link" href="https://www.google.co.jp/maps?q=%E2%80%8B%E3%80%92152-0035+%E6%9D%B1%E4%BA%AC%E9%83%BD+%E7%9B%AE%E9%BB%92%E5%8C%BA+%E8%87%AA%E7%94%B1%E3%81%8C%E4%B8%98+2-15-10+A%26D%E3%83%8F%E3%82%A6%E3%82%B9&um=1&ie=UTF-8&sa=X&ved=0ahUKEwis9rrAxo_cAhVQUd4KHSNDCxIQ_AUICigB">​〒152-0035 東京都 目黒区 自由が丘 2-15-10 A&Dハウス</a>
                    </div>
                </div>
                <div className="Cover-container  AccessMap-description">
                    <div className="Cover-description ">
                    <h1 className="t3 Cover-header">自由が丘グリーンホール　アクセス</h1>
                    <p className="AccessMap-subheader">東急東横線・大井町線　『自由が丘』駅下車徒歩約3分</p>
                    <div className="Cover-info">
                        <p>1. 正面出口を背に左へ、三井住友銀行の前を通り過ぎる。</p>
                        <p>2. ドトールを右手に角を曲がり、ヒロストリートを真っ直ぐ行く。</p>
                        <p>3. 右手にピーコック、道路をはさんで左手に美容院がある信号のある交差点をわたる。</p>
                        <p>4. 芳賀医院のすぐ横にある坂を上っていくとグリーンハウスが見えてきます。</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>

    </Home>
)
