// pages/index.js

import Home from '../components/Home'
import CTA from '../components/CTA'
import GlobalStyles from '../components/GlobalStyles'
import Head from 'next/head'
import HeroImage from '../components/HeroImage'
import CompanyOverview from '../components/CompanyOverview'
import Access from '../components/Access'
import Footer from '../components/Footer'
import Btn from '../components/Btn'
import Facility from '../components/Facility/Facility.js'

import "../scss/styles.scss"

export default () => (
    <Home>
        <GlobalStyles/>
        <Head>
            <meta name="description" content="testing the description of this " />
        </Head>
        <div>
            <div className="Hero-image"></div>
            <HeroImage/>
            <CompanyOverview/>
            <section className="Facilities container">
                <h3>施設概要</h3>
                <Facility/>
                <Btn url="facility" text="詳細"/>
            </section>
            <section className="CTAsection">
                 <CTA/>
            </section>
            <Access/>
           
            <Footer/>

        </div>
     
    </Home>
  
)