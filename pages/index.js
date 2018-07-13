// pages/index.js

import Home from '../components/Home'
import CTA from '../components/CTA'
import GlobalStyles from '../components/GlobalStyles'
import Head from 'next/head'
import HeroImage from '../components/HeroImage'
import CompanyOverview from '../components/CompanyOverview'
import Access from '../components/Access'
import Footer from '../components/Footer'

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
            <CTA/>
            <Access/>
           
            <Footer/>

        </div>
        <style jsx global> { `
        `
        }
        </style>
    </Home>
  
)