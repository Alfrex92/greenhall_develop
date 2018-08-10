import Link from 'next/link'
import Menu from './Menu'
import Dropdown from './Dropdown'

  const Header = () => (
    
      <div className="Navbar">
          <Link href="/">
            <a className ="Logo">
              <img src="/../static/img/logo.png" alt="自由が丘グリーンホール ロゴ" className="Logo-img"/>
            </a>
          </Link>
          <div className="Navbar-menu">
            <Menu/>
          </div>
          <div className="Navbar-right">

            <Link href="/faq">
            <a className ="Navbar-link">よくある質問</a>
            </Link>
            <Link href="/access" >
                <a className ="Navbar-link">アクセス</a>
            </Link>
            <div className="Navbar-link">
              <Dropdown/>
            </div>
            <Link href="/contact" >
                <a className ="Btn-link">予約</a>
            </Link>
          </div>

      </div>
  )

  export default Header
