// pages/index.js

import Home from '../components/Home'
import CTA from '../components/CTA'
import GlobalStyles from '../components/GlobalStyles'
import Head from 'next/head'
import HeroImage from '../components/HeroImage'
import Features from '../components/Features'
import Access from '../components/Access'
import Footer from '../components/Footer'
import Btn from '../components/Btn'
import Services from '../components/Services'
import Facility from '../components/Facility/Facility.js'

import "../scss/styles.scss"

export default () => (
    <Home>
        <GlobalStyles/>
        <Head>
            <meta name="description" content="testing the description of this " />
        </Head>
        <div className="Index">
            <HeroImage/>
            <Features/>
            <Services/>
            <section className="Facilities container ComponentSeparation">
                <h3 className="SectionHeader">施設概要</h3>
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