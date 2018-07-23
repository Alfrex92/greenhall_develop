import Link from 'next/link'
import Dropdown from './Dropdown'


export default () => (
    <div className="Links">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Dropdown/>
        <Link href="/facility">
            <a>施設概要</a>
        </Link>
        <Link href="/faq">
            <a>よくある質問</a>
        </Link>
        <a href="#access">アクセス</a>
        <a href="https://www.smartkaigisitsu.net/properties/view/231" target="_blank">予約</a>
    </div>
  
)