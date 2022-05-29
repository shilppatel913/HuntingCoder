import React,{useEffect,useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';
// collect all the data from blogdata file
//populate corresponding headings
const Blog = (props) => {
  console.log(props)
  const[blogs,setBlogs]=useState(props.allBlogs)
  // useEffect(() =>{
  //   console.log("useEffect is running");
    

  // },[])
  return (
    <>
        <div className={styles.container}>
            <main className={styles.main}>
              {blogs.map((blog)=>{
                return  <div className="blogs" key={blog.title}>
                <div className="blog">
                  <Link href={`/blogpost/${blog.slug}`}><a><h3>{blog.title}</h3></a></Link>
                  <p>{blog.metadesc.substr(0,10)}.......</p>
                </div>
              </div>
              })}
        </main>
        </div>
    </>
    
  )
}
//we will do server side rendering (pre-rendering which means server will populate the data from api and give it to the client)
// export async function getServerSideProps(context) {
//   let data=await fetch('http://localhost:3000/api/blogs');
//   let response=await data.json();
//   return {
//     props: {response}, // will be passed to the page component as props
//   }
// }

//now we will do static site generation and try to generate static websites
export async function getStaticProps(context) {
  let data=await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs=[];
    for(let index=0;index<data.length;index++){
      const item=data[index];
      myFile=await fs.promises.readFile(`blogdata/${item}`,'utf-8')
      allBlogs.push(JSON.parse(myFile))
    }
    console.log(allBlogs)
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
export default Blog