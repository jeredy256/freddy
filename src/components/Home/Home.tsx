import { Link } from "../../../node_modules/react-router-dom/dist/index"


const Home = () =>{
  return(
    <>
    <header>
    <h1> Seja Bem vindo </h1>
    <a><Link to={"/header"} >click</Link></a>
    </header>

    </>
    )
}

export default Home
