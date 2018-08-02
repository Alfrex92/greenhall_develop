import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
	render() {
		return (<html lang="ja">
			<Head>
				<meta charset="UTF-8"/>
				<meta name="robots" content="index, follow"/>
				<meta name="theme-color" content="#00D664"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
				<link rel="stylesheet" href="/_next/static/style.css"/>
				<link href="https://file.myfontastic.com/i6DDCMAgr8vZtvBZfZob6f/icons.css" rel="stylesheet"/>
				<link rel="apple-touch-icon" sizes="180x180" href="./static/fav/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="./static/fav/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="./static/fav/favicon-16x16.png"/>
				<link rel="manifest" href="./static/fav/site.webmanifest"/>
				<link rel="mask-icon" href="./static/fav/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#00D664"/>
                <meta property="og:site_name" content="Green Hall"/>
        		<meta property="fb:app_id" content="622585284460792"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="ja_JP"/>
                <meta property="og:image" content="https://green-hall-test.herokuapp.com/static/img/green-hall_facebook-cover.jpg"/>
                <meta name="twitter:image" content="https://green-hall-test.herokuapp.com/static/img/green-hall_facebook-cover.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>{" "}
		</html>);
	}
}

// <script type="application/ld+json">
//   add here the ld json https://json-ld.org/
//   https://jsonld.com/
//           </script>
