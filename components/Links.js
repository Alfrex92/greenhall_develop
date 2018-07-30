import Link from 'next/link'
import Dropdown from './Dropdown'


export default () => (
    <div className="Links">
        <Link href="/">
            <a>Home</a>
        </Link>
        <div className="Links-btn">
            <Dropdown/>
        </div>
        <Link href="/faq">
            <a>よくある質問</a>
        </Link>
        <a href="#access">アクセス</a>
    </div>
  
)