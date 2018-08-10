export default () => (
    <div className="MultiTimeTable ComponentSeparation">
    <h3 className="ContactForm-title">キャンセル規定について</h3>
    <div className="MultiTimeTable-container">
        <table className="MultiTimeTable-content">
            <tbody>
                <tr>
                    <th className="MultiTimeTable-title">御予約日から30日前まで</th>
                    <td >ご利用料金の1割をお支払い頂きます</td>
                </tr>
                <tr>
                    <th className="MultiTimeTable-title">29日前から15日前まで</th>
                    <td>ご利用料金の3割をお支払い頂きます</td>
                </tr>
                <tr>
                    <th className="MultiTimeTable-title">14日前から4日前まで</th>
                    <td>ご利用料金の5割りをお支払い頂きます。</td>
                </tr>
                <tr>
                    <th className="MultiTimeTable-title">3日前～当日</th>
                    <td>ご利用料金の全額をお支払い頂きます。</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p className="MultiTimeTable-caption">ご予約の上、お支払いがなくキャンセルした場合でも、当方の規定によるキャンセル料をお支払い頂きます。</p>
    </div>
    
)