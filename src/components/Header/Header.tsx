import { Link } from "react-router-dom"
import style from './Header.module.css'

const Header = () => {
  return(
    <>
    <header className={style.pico}>
      <h1 id={style.Respo}>Teste</h1>
      <ul>
        <li>
          <Link to={'/freddy'}>Home</Link>
        </li>
      </ul>
    </header>

    </>
    )
}


export default Header
