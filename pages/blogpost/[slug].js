import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css' 

const slug = () => {
    const router=useRouter()
    const {slug}=router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr/>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
      </main>
    </div> 
  )
}

export default slug