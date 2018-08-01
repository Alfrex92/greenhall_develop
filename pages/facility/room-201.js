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
            <title>Room 201 | 自由が丘グリーンホール   </title>
            <link rel="canonical" href=""/>
            <meta name="description" content="自由が丘グリーンホールのRoom 201です。利用:授業、セミナー等、収容人数:30名様、 階数: 2階"/>
            <meta property="og:title" content="Room 201 | 自由が丘グリーンホール "/>
            <meta property="og:description" content="自由が丘グリーンホールのRoom 201です。利用:授業、セミナー等、収容人数:30名様、 階数: 2階"/>
            <meta property="og:url" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:description" content="自由が丘グリーンホールのRoom 201です。利用:授業、セミナー等、収容人数:30名様、 階数: 2階"/>
            <meta name="twitter:title" content="Room 201 | 自由が丘グリーンホール "/>
        </Head>
        <Room roomNumber = 'Room 201' />
        <CTA/>
        <Access/>
        <GeneralInfo/>
        <Footer/>
    </Home>
)
