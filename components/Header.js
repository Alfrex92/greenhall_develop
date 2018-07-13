import Link from 'next/link'

const linkStyle = {
    marginRight: 15
  }
  
  const Header = () => (
      <div>
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
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