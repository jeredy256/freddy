import { Link } from "../../../node_modules/react-router-dom/dist/index"
import Footer from "../Footer/Footer"
import style from './Home.module.css'

const Home = () =>{
  return(
    <>
   <div className={style.Pico}>
   <header>
    <h1 id={style.respo}> Seja Bem vindo </h1>
    
    <ul>
      
      <li>
        <Link to={'/freddy/page'}>page</Link>
      </li>
    </ul>
    
    </header>
    
    <main>
      <h1 id={style.respo}>Testando uma div</h1>
      <p id={style.parag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum molestiae, ducimus, voluptatum quibusdam, omnis sunt hic obcaecati fugit laborum doloremque deserunt. Tempore maxime eveniet autem necessitatibus, quae voluptatem beatae!
      Facere esse adipisci perferendis nobis ut quaerat facilis harum, placeat quisquam illum porro explicabo sapiente a, eum laborum obcaecati veniam! Dolore unde ratione aperiam, laudantium amet excepturi autem veniam laborum.
      Provident, odit iste facilis vel explicabo excepturi! Molestiae expedita nostrum nobis, ab tempore nisi, labore deleniti nulla sit suscipit recusandae illum officia pariatur quod accusamus, quae quidem delectus eaque itaque?
      Earum cumque distinctio autem adipisci amet eius qui ex a libero nostrum illo harum natus at deleniti, quo fugit dolore! Placeat laboriosam natus tenetur, sequi modi eius minima tempora illum?
      Fuga, eligendi cum quidem natus assumenda nulla perferendis laudantium porro, ipsum accusantium minima aliquid optio voluptatibus mollitia libero facilis voluptas blanditiis est impedit quasi autem in eius sint. Doloremque, sed.
      Quo enim dolores minus numquam et, eius porro unde neque dignissimos blanditiis fuga. Eius eum repudiandae nihil sapiente perferendis laudantium id magnam, impedit sed asperiores. A quae optio inventore odio.
      Repellendus dolor provident nostrum odio obcaecati doloremque inventore quae a ipsam nemo totam illum tenetur accusamus repudiandae veniam consequuntur expedita, quas, corrupti deleniti ad esse, rem corporis! Temporibus, expedita asperiores.
      Atque tempora quam officiis minus nihil neque iusto rerum unde vel debitis laudantium quas beatae aperiam quia eligendi ea, velit obcaecati inventore doloribus incidunt aspernatur. Quo temporibus aspernatur sapiente exercitationem?</p>
    </main>
    

    

   </div>
   <Footer />
   
    </>
    )
}

export default Home

