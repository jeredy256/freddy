import img1 from './img/images.png'
import Header from "../Header/Header"
import style from './Page.module.css'
import Footer from '../Footer/Footer'

const Page = () =>{
  return(
    <>
    <Header />
    
      <div className={style.ft}>
        <img src={img1} alt="" />
        
        
      </div>
      <div className={style.ft}>
        <img src={img1} alt="" />
      </div>
      <div className={style.ft}>
        <img src={img1} alt="" />
      </div>
      <Footer />
    
    </>
    )
}

export default Page
