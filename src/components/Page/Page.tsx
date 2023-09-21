import img1 from './img/images.png'
import Header from "../Header/Header"
import style from './Page.module.css'

const Page = () =>{
  return(
    <>
    <Header />
    <div className={style.container}>
      <div className={style.ft}>
        <img src={img1} alt="" />
        
        
      </div>
      <div className={style.ft}>
        <img src={img1} alt="" />
      </div>
      <div className={style.ft}>
        <img src={img1} alt="" />
      </div>
    </div>
    </>
    )
}

export default Page
