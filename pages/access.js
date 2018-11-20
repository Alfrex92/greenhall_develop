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
            <title>アクセス | 自由が丘グリーンホール</title>
            <link rel="canonical" href=""/>
            <meta name="description" content="自由が丘グリーンホールのアクセスです。周辺地図、交通アクセス、などのご案内。"/>
            <meta property="og:title" content="自由が丘グリーンホール  | アクセス）"/>
            <meta property="og:description" content="自由が丘グリーンホールのアクセスです。周辺地図、交通アクセス、などのご案内。"/>
            <meta property="og:url" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:description" content="自由が丘グリーンホールのアクセスです。周辺地図、交通アクセス、などのご案内"/>
            <meta name="twitter:title" content="自由が丘グリーンホール  | アクセス"/>
        </Head>
        <div className="AccessMap">
            <div className="Cover ComponentSeparation AccessMap-content">
                
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
            <Access/>    
        </div>
        <Footer/>

    </Home>
)
