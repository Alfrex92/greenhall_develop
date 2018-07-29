


export default () => (
    <div className="MultiTimeTable ComponentSeparation container">
        <h2 className="SectionHeader">ご利用料金</h2>
        <div className="MultiTimeTable-container">
            <table className="MultiTimeTable-content">
                <tbody>
                    <tr>
                        <th className="MultiTimeTable-time">ご利用時間</th>
                        <td className="MultiTimeTable-time">9:00～12:00</td>
                        <td className="MultiTimeTable-time">12:00-18:00</td>
                        <td className="MultiTimeTable-time">18:00～22:00</td>
                    </tr>
                    <tr>
                        <th rowSpan="2" className="MultiTimeTable-title">平日</th>
                        <td>3,500円/1時間</td>
                        <td>4,000円/1時間</td>
                        <td rowSpan="2">4,500円/1時間</td>
                    </tr>
                    <tr>
                        <td colSpan="2">30,000円/8時間</td>
                    </tr>
                    <tr>
                        <th rowSpan="2" className="MultiTimeTable-title">土・日・祝</th>
                        <td>4,000円/1時間</td>
                        <td>4,500円/1時間</td>
                        <td rowSpan="2">4,500円/1時間</td>
                    </tr>
                    <tr>
                        <td colSpan="2">32,000円/8時間</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="MultiTimeTable-caption">
            <p>※8時間以上ご利用の場合の延長料金は 3500円/1時間</p>
            <p>※１日～数日、各日２時間以上からご利用になれます。連日ご使用の場合割引いたします。</p>
        </div>
       

    </div>
)