import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {
  return (
    <>
        <div className={styles.container}>
            <main className={styles.main}>
        <div className="blogs">
        <div className="blog">
          <Link href="/blogpost/learn-javascript"><a><h3>How to Learn Javascript in 2022</h3></a></Link>
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
    </>
    
  )
}

export default blog