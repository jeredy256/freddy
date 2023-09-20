import { Link } from "react-router-dom"
import style from './Header.module.css'

const Header = () => {
  return(
    <>
    <header className={style.pico}>
      <h1>Teste</h1>
      <button className={style.tico}><Link to={"/freddy"}> Home</Link> </button>
    </header>

    </>
    )
}


export default Header
