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
            <a href="#steps" className ="Navbar-link">ご利用の流れ</a>           
            <div className="Navbar-link">
              <Dropdown/>
            </div>
            <Link href="/faq">
            <a className ="Navbar-link">よくある質問</a>
            </Link>
            <Link href="/access" >
                <a className ="Navbar-link">アクセス</a>
            </Link>
            <Link href="/contact" >
                <a className ="Btn-link">問い合わせ</a>
            </Link>
          </div>

      </div>
  )

  export default Header
