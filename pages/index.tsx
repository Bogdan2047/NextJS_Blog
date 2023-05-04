import Cards from '../components/cards'
import Inputs from '../components/inputs'


const Home = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%",minHeight: "865px"}}>
      <div style={{paddingLeft: "35%"}}>
        <h1 style={{fontSize: "40px"}}>Blog</h1>
      </div>
      <Inputs />
      <Cards />
    </div>
  )
}

export default Home;