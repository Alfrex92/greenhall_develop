import Home from '../../components/Home'
import Head from 'next/head'
import Room  from '../../components/Room'
import Access from '../../components/Access'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import GeneralInfo from '../../components/GeneralInfo'



export default () => (
    <Home>
        <Head>
            <title>Room 401 | 自由が丘グリーンホール   </title>
            <link rel="canonical" href=""/>
            <meta name="description" content="テラスからは富士山が見えます。展示会、撮影、貸切パーティにも最適です。ミーティング、ワークショップ、教室にも、ご利用いただけます。収容人数:50名様 階数: 3階"/>
            <meta property="og:title" content="Room 401 | 自由が丘グリーンホール "/>
            <meta property="og:description" content="テラスからは富士山が見えます。展示会、撮影、貸切パーティにも最適です。ミーティング、ワークショップ、教室にも、ご利用いただけます。収容人数:50名様 階数: 3階"/>
            <meta property="og:url" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:description" content="テラスからは富士山が見えます。展示会、撮影、貸切パーティにも最適です。ミーティング、ワークショップ、教室にも、ご利用いただけます。収容人数:50名様 階数: 3階"/>
            <meta name="twitter:title" content="Room 401 | 自由が丘グリーンホール "/>
        </Head>
        <Room roomNumber = 'Room 401' />
        <CTA/>
        <Access/>
        <GeneralInfo/>
        <Footer/>
    </Home>
)
