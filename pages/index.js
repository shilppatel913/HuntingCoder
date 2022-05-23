import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>  

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
         Taglines are exaggerated in the form of blogs
        </p>
        
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