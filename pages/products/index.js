import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function ProductList() {
  return(
    <div className={styles.conteinr}>
      <main className={styles.main}>
        <h1 className={styles.title}>JavaScript</h1>

        <ul className={styles.ul}>
          <li>
            <Link href="/products/nextjs">
              <h3>Next.js</h3>
            </Link>
          </li>
          <li>
            <Link href="/products/reactjs">
              <h3>React.js</h3>
            </Link>
          </li>
          <li>
            <Link href="/products/vuejs">
              <h3>Vue.js</h3>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
