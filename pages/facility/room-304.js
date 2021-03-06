import Home from '../../components/Home.js'
import Head from 'next/head'
import Room  from '../../components/Room'
import Access from '../../components/Access'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import GeneralInfo from '../../components/GeneralInfo'


export default () => (
    <Home>
        <Head>
            <title>Room 304 | 自由が丘グリーンホール   </title>
            <link rel="canonical" href=""/>
            <meta name="description" content="自由が丘グリーンホールのRoom 304です。パーティ仕様・スポーツ観戦用大型TVモニター、大型冷蔵庫、自動製氷機、電子レンジ利用可。51.48平方m"/>
            <meta property="og:title" content="Room 304 | 自由が丘グリーンホール "/>
            <meta property="og:description" content="自由が丘グリーンホールのRoom 304です。パーティ仕様・スポーツ観戦用大型TVモニター、大型冷蔵庫、自動製氷機、電子レンジ利用可。51.48平方m"/>
            <meta property="og:url" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:description" content="自由が丘グリーンホールのRoom 304です。パーティ仕様・スポーツ観戦用大型TVモニター、大型冷蔵庫、自動製氷機、電子レンジ利用可。51.48平方m"/>
            <meta name="twitter:title" content="Room 304 | 自由が丘グリーンホール "/>
        </Head>
        <Room roomNumber = 'Room 304' />
        <CTA/>
        <Access/>
        <GeneralInfo/>
        <Footer/>
    </Home>
)
