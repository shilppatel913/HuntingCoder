import React,{useState} from 'react'
import styles from '../styles/Contact.module.css'
const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [desc,setDesc]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,phone,desc)
    fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "name":name,
    "email":email,
    "phone":phone,
    "desc":desc
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  }
  const handleChange=(e)=>{
    console.log(e);
    if(e.target.name=="name"){
      setName(e.target.value);
    }
    else if(e.target.name=="email"){
      setEmail(e.target.value);
    }
    else if(e.target.name=="phone"){
      setPhone(e.target.value);
    }
    else if(e.target.name=="desc"){
      setDesc(e.target.value);
    }
  }
  return (
    <>
    <div className={styles.container}>
    <h1>Contact us</h1>
    <form  onSubmit={handleSubmit}>
    <div className={styles.mb3}>
    <label className={styles.label} htmlFor="exampleInputName" >Name</label>
    <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name="name" aria-describedby="emailHelp"/>
  </div>
  <div className={styles.mb3}>
    <label className={styles.label} htmlFor="exampleInputEmail1" >Email address</label>
    <input className={styles.input} type="text" value={email} onChange={handleChange} id="email" name="email" aria-describedby="emailHelp"/>
  </div>
  <div className={styles.mb3}>
    <label className={styles.label} htmlFor="exampleInputPhonenumber">Password</label>
    <input  className={styles.input} type="text" value={phone} onChange={handleChange} name="phone" id="phone"/>
  </div>
  <div className={styles.mb3}>
  <label className={styles.label} htmlFor="exampleDescription">Enter Your query</label>
  <textarea className={styles.input} value={desc} onChange={handleChange} placeholder="Leave a comment here" name="desc" id="desc"></textarea>
</div>
  <button type="submit" className={styles.btn}>Submit</button>
</form>
</div>
</>
  )
}

export default Contact