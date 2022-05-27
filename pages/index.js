import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import Dummy from '../Components/Dummy'
// import '../styles/style.css'   global css cannot be imported from files it can only be used in app.js
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
 
      
       

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hunting Coder</span>
        </h1>
      <div className={styles.imageWrap}>
        {/* <Image src="/huntingcoder.webp" width={462} height={280}></Image> */}
        <img src="/huntingcoder.web" width={462} height={280} alt="" className="src" />
      </div>
        <h2 className={styles.description}>
        Popular Blogs
        </h2>
        
      <div className="blogs">
        <div className="blog">
          <h3>How to Learn Javascript in 2022</h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </div>
      <div className="blogs">
        <div className="blog">
          <h3>How to Learn Javascript in 2022</h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </div>
      <div className="blogs">
        <div className="blog">
          <h3>How to Learn Javascript in 2022</h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </div>
    </main>
      
    </div>
  )
}
