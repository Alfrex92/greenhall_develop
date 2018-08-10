import TableCancel from '../components/TableCancel'
import Btn from '../components/Btn'


export default () => (
    <div className="ContactForm container">
        <h1 className="t2 CoverHeader">お申込みとお支払方法</h1>
        <h2 className="ContactForm-title">スポット使用</h2>
        <ul className="ContactForm-list">
            <li className="ContactForm-item">・お電話又かFAXかお申込みフォームからご予約できます。</li>
            <li><strong> ・ TEL：03-3725-3424　/　FAX：03-3723-3490</strong></li>
            <li className="ContactForm-item">・お電話又はFAXにて申し込む際は、ご使用日時、ご使用者名、ご住所、お電話番号をお知らせください。受付時間　9：00-17：00</li>
            <li className="ContactForm-item">・当方からの、お部屋確保・ご予約確定の連絡をもってご予約成立となります。</li>
            <li className="ContactForm-item">・スポット使用の場合は、ご予約確定から1週間以内に料金をお振り込み下さい。7日を切っている場合は、ご予約確定後なるべく早いうちにお振込み下さい。</li>
            <li className="ContactForm-item">・お振り込み頂いてからのキャンセルは当方の規定によりますので予めご了承下さい。</li>
            <li className="ContactForm-item">・現在、新規受付けは行っておりません。スポットのみとなります。</li>
        </ul>
        <h3 className="ContactForm-title">お支払方法</h3>
        <p>下記の銀行口座へ使用料をお振込みください。</p>
        <p> <strong>三菱東京ＵＦＪ銀行　自由が丘駅前支店　普通　1109149　自由が丘グリーンホール</strong></p>
        <TableCancel/>
        <div className="ContactForm-btn">
         <a className="Btn-link" href="https://ssl1.secure-c.net/~green-hall/contact/apply3.html">予約</a>
        </div>
    </div>
)