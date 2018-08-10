import Link from 'next/link'
import Dropdown from './Dropdown'


export default (props) => (
    <div className="Links">
        <Link href="/">
            <a onClick={props.onClick}>Home</a>
        </Link>
        <div className="Links-btn">
            <Dropdown/>
        </div>
        <Link href="/faq">
            <a onClick={props.onClick}>よくある質問</a>
        </Link>
        <Link href="/access">
            <a onClick={props.onClick}>アクセス</a>
        </Link>
        <Link href="/contact">
            <a className="Btn-link" onClick={props.onClick}>予約</a>
        </Link>
    </div>

)
