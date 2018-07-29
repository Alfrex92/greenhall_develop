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
            <Dropdown/>
            <Link href="/faq">
            <a>よくある質問</a>
            </Link>
            <a href="#access">アクセス</a>
            <Link href="/reserve">
            <a>予約</a>
            </Link>
          </div>
         
      </div>
  )
  
  export default Header