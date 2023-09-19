import { Link } from "../../../node_modules/react-router-dom/dist/index"
import Footer from "../Footer/Footer"
import style from './Home.module.css'

const Home = () =>{
  return(
    <>
   <div className={style.Pico}>
   <header>
    <h1> Seja Bem vindo </h1>
    <a><Link to={"/header"} >click</Link></a>
    </header>

    

   </div>
   <Footer />
   
    </>
    )
}

export default Home
