import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css' 
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c){
    return {__html:c};
  }
  const router=useRouter()
    const [blog,setBlog]=useState(props.myBlog);
    // useEffect(()=>{
     
    // },[router.isReady])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr/>
      
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

      </main>
    </div> 
  )
}

// export async function getServerSideProps(context) {
//   const {slug}=context.query
//   let data=await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
//   let response=await data.json()
//   return {
//     props: {response}, // will be passed to the page component as props
//   }
// }
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug : "how-to-learn-javascript"} },
      { params: { slug : "how-to-learn-nodejs"} },
      { params: { slug : "how-to-learn-nextjs"} },
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const {slug}=context.params;
  let myBlog=await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
  console.log(myBlog)
    // console.log(data);
  return {
    props: {myBlog:JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}
export default Slug