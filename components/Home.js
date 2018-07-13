import Header from './Header'



const Home = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default Home