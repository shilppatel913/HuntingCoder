import React from 'react'
import styles from '../styles/About.module.css'
const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium atque eligendi sapiente consequuntur explicabo laborum! Cum obcaecati reprehenderit atque fugit culpa harum voluptas aperiam accusantium praesentium, quod commodi est, deleniti hic doloremque. Necessitatibus.</p>
      <h2>Services offered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi aperiam nisi ipsa magnam eos maxime cumque, totam corrupti nam qui nesciunt, ullam, architecto quo quod veritatis beatae nulla explicabo minus laborum eaque possimus enim sint. Ipsum dolorem facilis odio molestias quis aliquid eligendi, architecto totam cupiditate suscipit dolore eum pariatur culpa vel soluta?</p>

      <ul>
        <li>Services 1</li>
        <li>Services 2</li>
        <li>Services 3</li>
        <li>Services 4</li>
      </ul>
      <h2>Contact us</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi reiciendis, ea quos repudiandae accusantium accusamus aut facilis! Debitis ipsam ab tempora. Laborum omnis ad modi vel fugiat esse provident doloremque?</p>
    </div>
  )
}

export default about