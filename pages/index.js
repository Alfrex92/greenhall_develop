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
		<title>自由が丘グリーンホール、緑蔭レンタルスペース</title>
		<link rel="canonical" href=""/>
		<meta name="description" content="自由が丘の緑蔭レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
		<meta property="og:title" content="自由が丘グリーンホール、緑蔭レンタルスペース"/>
		<meta property="og:description" content="自由が丘の緑蔭レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
		<meta property="og:url" content=""/>
		<meta name="twitter:url" content=""/>
		<meta name="twitter:image" content=""/>
		<meta name="twitter:description" content="自由が丘の緑蔭レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
		<meta name="twitter:title" content="自由が丘グリーンホール、緑蔭レンタルスペース"/>
		<meta name="google-site-verification" content="F4TJRlscWWM0WTy3JJ0_lsxs41w2kwjUxN8oN8SynJY" />
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
