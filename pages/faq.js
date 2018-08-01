import Home from '../components/Home'
import QA from '../components/QA'
import GlobalStyles from '../components/GlobalStyles'
import Footer from '../components/Footer'
import Head from 'next/head'

const styleEle = {
    textAlign:'center'
}

export default () => (
    <Home>
        <Head>
            <title>自由が丘グリーンホール  | よくあるご質問（FAQ） </title>
            <link rel="canonical" href=""/>
            <meta name="description" content="自由が丘グリーンホールのの公式ホームページです。「よくあるご質問（FAQ）」をご紹介します。"/>
            <meta property="og:title" content="自由が丘グリーンホール  | よくあるご質問（FAQ）"/>
            <meta property="og:description" content="自由が丘グリーンホールのの公式ホームページです。「よくあるご質問（FAQ）」をご紹介します。"/>
            <meta property="og:url" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:description" content="自由が丘グリーンホールのの公式ホームページです。「よくあるご質問（FAQ）」をご紹介します。"/>
            <meta name="twitter:title" content="自由が丘グリーンホール  | よくあるご質問（FAQ）"/>
        </Head>
        <h1 className="t3" style={styleEle}>よくある質問</h1>
        <GlobalStyles/>
        <QA/>
        <Footer/>
    </Home>
)
