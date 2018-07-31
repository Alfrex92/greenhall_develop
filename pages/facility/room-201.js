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
        <meta name="viewport" content="width=device-width, initial-scale=1" class="next-head"/>
        <meta name="description" content="testing the description of this " />
        </Head>
        <Room roomNumber = 'Room 201' />
        <CTA/>
        <Access/>
        <GeneralInfo/>
        <Footer/>
    </Home>
)
