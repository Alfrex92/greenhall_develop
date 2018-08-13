// pages/index.js
import Home from '../components/Home'
import Head from 'next/head'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

import "../scss/styles.scss"

export default() => (<Home>
	<Head>
		<title>予約 | 自由が丘グリーンホール</title>
		<link rel="canonical" href=""/>
		<meta name="description" content="自由が丘の緑陰レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
		<meta property="og:title" content="自由が丘グリーンホール、緑陰レンタルスペース"/>
		<meta property="og:description" content="自由が丘の緑陰レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
		<meta property="og:url" content=""/>
		<meta name="twitter:url" content=""/>
		<meta name="twitter:image" content=""/>
		<meta name="twitter:description" content="自由が丘の緑陰レンタルスペース･貸し会議室、展示会・説明会・会議・研修・セミナー・など用途に合わせてご利用いただけます"/>
        <meta name="twitter:title" content="自由が丘グリーンホール、緑陰レンタルスペース"/>
	</Head>
	<div className="Index">
        <ContactForm/>
		<Footer/>

	</div>

</Home>)
