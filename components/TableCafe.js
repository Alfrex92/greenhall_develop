
export default (props) => (

    <div className="MultiTimeTable container">
        <div className="MultiTimeTable-container">
        <table className="MultiTimeTable-content MultiTimeTable--small">
            <tbody>
                <tr>
                <th className="MultiTimeTable-time">ご利用時間</th>
                <td className="MultiTimeTable-time" colSpan="2">9:00～ 22:00</td>
                </tr>

                <tr>
                <th className="MultiTimeTable-title">平日</th>
                <td>4,800円/1時間</td>
                </tr>

                <tr>
                <th className="MultiTimeTable-title">土・日・祝</th>
                <td>5,400円/1時間</td>
                </tr>
            </tbody>
        </table>
        </div>
        <p className="MultiTimeTable-caption">カフェタイプ・ギャラリータイプ ※最低２時間のご利用（税込）</p>        

    </div>

)