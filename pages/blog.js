import React,{useEffect,useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
// collect all the data from blogdata file
//populate corresponding headings
const blog = () => {
  const[blogs,setBlogs]=useState([] )
  useEffect(() =>{
    console.log("useEffect is running");
    fetch('http://localhost:3000/api/blogs').then((response)=>{
          return response.json();
    }).then((data)=>{
        console.log(data)
        setBlogs(data)
    })

  },[])
  return (
    <>
        <div className={styles.container}>
            <main className={styles.main}>
              {blogs.map((blog)=>{
                return  <div className="blogs">
                <div className="blog">
                  <Link href={`/blogpost/${blog.slug}`}><a><h3>{blog.title}</h3></a></Link>
                  <p>{blog.content.substr(0,140)}.......</p>
                </div>
              </div>
              })}
        </main>
        </div>
    </>
    
  )
}

export default blog