import Link from 'next/link'
import Menu from './Menu'

const linkStyle = {
    marginRight: 15
  }
  
  const Header = () => (
      <div className="Navbar">
          <Link href="/">
            <a className ="Logo"style={linkStyle}>
              <img src="/../static/img/logo.png" alt="自由が丘グリーンホール ロゴ" className="Logo-img"/>
            </a>
          </Link>
          <Menu/>
          <Link href="/facility">
            <a style={linkStyle}>施設概要</a>
          </Link>
          <Link href="/faq">
            <a style={linkStyle}>よくある質問</a>
          </Link>
          <a href="#access">アクセス</a>
          <Link href="/reserve">
            <a  style={linkStyle}>予約</a>
          </Link>
      </div>
  )
  
  export default Header