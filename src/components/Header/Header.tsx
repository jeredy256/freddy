import { Link } from "../../../node_modules/react-router-dom/dist/index"

const Header = () => {
  return(
    <>
    <header>
      <h1>Teste</h1>
      <button ><Link to={"/freddy"}> Home</Link> </button>
    </header>
    </>
    )
}

export default Header
