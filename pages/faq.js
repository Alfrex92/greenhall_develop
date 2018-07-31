import Home from '../components/Home'
import QA from '../components/QA'
import GlobalStyles from '../components/GlobalStyles'
import Footer from '../components/Footer'

const styleEle = {
    textAlign:'center'
}

export default () => (
    <Home>
        <h1 className="t3" style={styleEle}>よくある質問</h1>
        <GlobalStyles/>
        <QA/>
        <Footer/>
    </Home>
)
