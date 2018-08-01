// pages/index.js
import Home from '../components/Home'
import CTA from '../components/CTA'
import GlobalStyles from '../components/GlobalStyles'
import Head from 'next/head'
import HeroImage from '../components/HeroImage'
import Features from '../components/Features'
import Access from '../components/Access'
import Footer from '../components/Footer'
import Services from '../components/Services'
import GeneralInfo from '../components/GeneralInfo'
import Facility from '../components/Facility/Facility.js'

import "../scss/styles.scss"

export default() => (<Home>
	<GlobalStyles/>
	<Head>
		<title>FreeWill-FreeSpace, a new incubator model.</title>
		<link rel="canonical" href="http://freewill-freespace.com/"/>
		<meta name="description" content="インキュベーターシステムのような役割を担っており、今までに類をみない新しいプラットフォームです。"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		<meta property="og:url" content="http://freewill-freespace.com/"/>
		<meta property="og:title" content="FreeWill-FreeSpace, a new incubator model"/>
		<meta property="og:site_name" content="FreeWill-FreeSpace"/>
		<meta property="fb:app_id" content="435950733119756"/>
		<meta property="og:description" content="インキュベーターシステムのような役割を担っており、今までに類をみない新しいプラットフォームです。ここでは、あなたの持つビジネスアイディアを実現させることを手伝うことができます。"/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content="http://freewill-freespace.com/"/>
		<meta property="og:image" content="https://www.gdicommunications.com/images/layout/GDILogo.png"/>
		<meta property="og:locale" content="ja_JP"/>
		<meta name="twitter:url" content="http://freewill-freespace.com/"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:image" content="https://www.gdicommunications.com/images/layout/GDILogo.png"/>
		<meta name="twitter:description" content="インキュベーターシステムのような役割を担っており、今までに類をみない新しいプラットフォームです。ここでは、あなたの持つビジネスアイディアを実現させることを手伝うことができます。"/>
		<meta name="twitter:title" content="FreeWill-FreeSpace, a new incubator model"/>
	</Head>
	<div className="Index">
		<HeroImage/>
		<Features/>
		<Services/>
		<section className="Facilities container ComponentSeparation">
			<h3 className="SectionHeader">施設概要</h3>
			<Facility/>
		</section>
		<CTA/>
		<Access/>
		<GeneralInfo/>
		<Footer/>

	</div>

</Home>)
