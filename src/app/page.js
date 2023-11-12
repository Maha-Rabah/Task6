import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className='ma-title'>
          <h1 className={styles.title}>Welcome To Our Education Platform</h1>
          <p className={styles.desc}>log in to learn with us</p>
          <a href="login">
          <button className={styles.button}>login</button> 
          </a>
        </div>
    </div>
  </main>
  )
}
