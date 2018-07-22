import Home from '../components/Home.js'
import Head from 'next/head'
import Room  from '../components/Room'


export default () => (
    <Home>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" class="next-head"/>
        <meta name="description" content="testing the description of this " />
        </Head>
        <p>This is the facility page</p>
        <Room roomNumber = 'Room 304' />
        <p>ご利用料金</p>
    </Home>
)

